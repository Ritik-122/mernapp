const User=require('../models/User')
const {validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');

const createUser=async(req,res)=>{
  
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
  
    
    
   const salt=await  bcrypt.genSalt(10);
   const secPassword=await bcrypt.hash(req.body.password,salt)
    try{
       await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:secPassword,

        })
        res.json({success:true})

    }catch(error){
    console.log(error);
    res.json({success:false})
    }

}
module.exports=createUser