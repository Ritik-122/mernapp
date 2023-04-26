const User=require('../models/User')
const {validationResult } = require('express-validator');

const createUser=async(req,res)=>{
  
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
  
    
    
    try{
       await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password,

        })
        res.json({success:true})

    }catch(error){
    console.log(error);
    res.json({success:false})
    }

}
module.exports=createUser