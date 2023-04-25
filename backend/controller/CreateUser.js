const User=require('../models/User')
const createUser=async(req,res)=>{
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