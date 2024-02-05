require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');
const cors=require('cors');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const cookieParser= require('cookie-parser');
const app=express();
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
    optionsSuccessStatus:204
}));
app.use(cookieParser());
const UserModel=require('./models/userModel')
mongoose.connect(process.env.MONGO_URI)

const verifyAdmin = (req, res, next) => {
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

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})