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
    // Check if the item exists
    const item = await ItemModel.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Delete the item
    await ItemModel.findByIdAndDelete(itemId);
    return res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})