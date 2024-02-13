require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');
const cors=require('cors');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const cookieParser= require('cookie-parser');
const multer = require('multer');
const app = express();
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","DELETE"],
    credentials:true,
    optionsSuccessStatus:204
}));
app.use(cookieParser());
const UserModel=require('./models/userModel')
const ItemModel=require('./models/collectionModel')
const CartModel=require('./models/cartModel')
const ReviewModel=require('./models/reviewModel')
const WishListModel=require('./models/wishListModel');
const OrderModel=require('./models/orderModel')
mongoose.connect(process.env.MONGO_URI)

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token is missing");
    } else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.json("Error with token");
            } else {
                if (decoded.role === "Admin" && req.path.startsWith("/admin")) {
                    next();
                } else if (decoded.role === "Dealer" && req.path.startsWith("/dealers")) {
                    next();
                } else if (decoded.role === "User" && (
                    req.path.startsWith("/shop") ||
                    req.path.startsWith("/cloths/") ||
                    req.path.startsWith("/newarrivals") ||
                    req.path.startsWith("/cart") ||
                    req.path.startsWith("/whislist") ||
                    req.path.startsWith("/myprofile")
                )) {
                    next();
                } else {
                    return res.json("Not Authorized");
                }
            }
        });
    }
};

app.get('/admin/dashboard', verifyUser, (req, res) => {
    res.json("Admin Dashboard Success");
});

app.get('/dealers/dashboard', verifyUser, (req, res) => {
    res.json("Dealers Dashboard Success");
});

app.get('/users/cloths/', verifyUser, (req, res) => {
    res.json("Users Dashboard Success");
});

app.post('/register',(req,res)=>{
    const{username,email,password,mobile,role}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        UserModel.create({username,email,password:hash,mobile,role})
        .then(user=>res.json('success'))
        .catch(err=>res.json(err))
    })
    .catch(err=>res.json(err))
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json("No record exists");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ email: user.email, role: user.role }, process.env.SECRET, { expiresIn: '1hr' });
            res.cookie('token', token);
            return res.json({ status: 'Success', role: user.role, token });
        } 
        else {
            return res.json("Password Incorrect");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
app.post('/store', upload.array('images', 5), async (req, res) => {
    try {
        const { brand, name, price, category,type,size, color, pattern, description } = req.body;
        const images = req.files.map((file) => file.originalname);
        const newItem = new ItemModel({brand,name,price,category,type,size: JSON.parse(size),color: JSON.parse(color),pattern,description,images,});
        await newItem.save();
        res.status(201).json({ message: 'Item created successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
app.get('/items', async (req, res) => {
    try {
        const items = await ItemModel.find();
        res.json(items);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.delete('/items/:itemId', async (req, res) => {
  const { itemId } = req.params;
  try {
    const item = await ItemModel.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await ItemModel.findByIdAndDelete(itemId);
    return res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/items/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const items = await ItemModel.find({ category: category });
        res.json(items);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        const product = await ItemModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/addToCart', async (req, res) => {
    try {
        const { userEmail, productId } = req.body;
        if (!userEmail || !productId) {
            return res.status(400).json({ message: 'User email and product ID are required' });
        }
        const existingCartItem = await CartModel.findOne({ userEmail, productId });
        if (existingCartItem) {
            return res.status(400).json({ message: 'Item already exists in the cart' });
        }
        const newCartItem = new CartModel({
            userEmail: userEmail,
            productId: productId
        });
        await newCartItem.save();
        return res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/itemsExcept/:category/:id', async (req, res) => {
    const { category,id } = req.params;
    try {
        const items = await ItemModel.find({ category: category, _id: { $ne: id } });
        res.json(items);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/addReview', async (req, res) => {
    try {
        const { productId, review, userEmail } = req.body;
        const user = await UserModel.findOne({ email: userEmail });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        const newReview = new ReviewModel({
            productId,
            review,
            userEmail,
            username: user.username,
        });
        await newReview.save();
        res.status(200).json({ message: 'Review added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/reviews/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const reviews = await ReviewModel.find({ productId });
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/wishlist', async (req, res) => {
    try {
        const { userEmail, productId } = req.body;
        if (!userEmail || !productId) {
            return res.status(400).json({ message: 'User email and product ID are required' });
        }
        const existingWishListItem = await WishListModel.findOne({ userEmail, productId });
        if (existingWishListItem) {
            return res.status(400).json({ message: 'Item already exists in the wishlist' });
        }
        const newWishListItem = new WishListModel({
            userEmail: userEmail,
            productId: productId
        });
        await newWishListItem.save();
        return res.status(200).json({ message: 'Item added to wishlist successfully' });
    } catch (error) {
        console.error('Error adding item to wishlist:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/userWishlist/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const items = await WishListModel.find({ userEmail: email });
        res.json(items);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ItemModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/wishlist/:productId/:userEmail', async (req, res) => {
    const { productId,userEmail } = req.params;
    try {
        const existingWishListItem = await WishListModel.findOne({ userEmail, productId });
        if (!existingWishListItem) {
            return res.status(404).json({ message: 'Product not found in wishlist' });
        }
        await WishListModel.findOneAndDelete({ userEmail, productId });
        res.status(200).json({ message: 'Product removed from wishlist successfully' });
    } 
    catch (error) {
        console.error('Error removing product from wishlist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/userCart/:email',async(req,res)=>{
    const { email } = req.params;
    try {
        const items = await CartModel.find({ userEmail: email });
        res.json(items);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
})

app.delete('/cart/:productId/:userEmail',async(req,res)=>{
    const { productId,userEmail } = req.params;
    try {
        const existingCartItem = await CartModel.findOne({ userEmail, productId });
        if (!existingCartItem) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
        await CartModel.findOneAndDelete({ userEmail, productId });
        res.status(200).json({ message: 'Product removed from cart successfully' });
    } 
    catch (error) {
        console.error('Error removing product from cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.post('/orders', async (req, res) => {
    try {
        const newOrder = await OrderModel.create(req.body);
        res.status(201).json(newOrder);
    } 
    catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/ordersDetails/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const orders = await OrderModel.find({ email:email });
        res.json(orders);
    } 
    catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})