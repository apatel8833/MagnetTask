const express = require("express");
const userModel = require("../models/user");
const productModel = require("../models/product");
const multer = require("multer");
const path = require("path");


const router = express();

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/Images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.filename + " "+ Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
})


router.post("/upload",upload.single("file"), function(req,res){
    userModel.create({image:req.file.filename})
    .then(result=>res.json(result))
    .catch(err=>console.log(err)
    )       // console.log(req.file);
})
router.delete("/upload/:id", function(req,res){
    userModel.findByIdAndDelete({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err)
    )       // console.log(req.file);
})

router.get("/Allfiles",function(req,res){
    userModel.find()
    .then(usr =>res.send(usr))
    .catch(err =>console.log(err))
})


module.exports = router