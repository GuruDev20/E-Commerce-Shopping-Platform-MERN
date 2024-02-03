require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');
const cors=require('cors');
const userRoutes=require('./routes/user')
const app= express();
app.use(express.json());
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use('/api',userRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('listening on port ',process.env.PORT);
        })
    })
    .catch((error)=>{
        console.error(error);
    })