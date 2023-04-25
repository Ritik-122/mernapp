const express=require('express')
const router=express.Router()
const createUser=require('../controller/CreateUser');

router.post("/createuser",createUser)

module.exports=router;