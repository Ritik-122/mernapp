const express=require('express')
const router=express.Router()
const createUser=require('../controller/CreateUser');
const loginUser=require('../controller/login')
const {body,validationResult}=require('express-validator')

router.post("/createuser",[
    body('email').isEmail(),

    body('password').isLength({min:5}),
    body('name').isLength({min:5})
],
 createUser)

 router.post('/loginuser',[
    body('email').isEmail(),

    body('password').isLength({min:5}),
   
],loginUser)
module.exports=router;