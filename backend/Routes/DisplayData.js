const express=require('express')
const displayData=require('../controller/displayData')
const router=express.Router()

router.post('/foodData',displayData)

module.exports=router