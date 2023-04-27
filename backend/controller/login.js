const User = require("../models/User");
const { validationResult } = require("express-validator");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const jwtSecret="Mynameiskhanmynameisritikmynameisaditya"
const loginUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }

  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: "Wrong credentials" });
    }

    const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
    if (!pwdCompare) {
      return res.status(400).json({ errors: "Wrong credentials" });
    }

    /////////////////////////////////////////////////////////jwt token/////////////////////////////
    const data={
      user:{
        id:userData.id
      }
    }
    const authToken=jwt.sign(data,jwtSecret)
    return res.status(200).json({ success: true,authToken:authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = loginUser;
