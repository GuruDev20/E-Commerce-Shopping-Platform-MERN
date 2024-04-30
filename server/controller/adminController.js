const Collection=require('../models/collectionModel')
const addCollection=async(req,res)=>{
    const {name,brand,price,category,size,color,pattern,description,image}=req.body;
    try{
        const user=await Collection.addCollection(name,brand,price,category,size,color,pattern,description,image)
        res.status(200).json("Collection added successfully")
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
const deleteCollection=async(req,res)=>{

}
const updateCollection=async(req,res)=>{

}
const getCollection=async(req,res)=>{

}
module.exports = {
    addCollection,
    updateCollection,
    deleteCollection,
    getCollection,
};