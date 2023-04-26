const User = require("../models/User");
const { validationResult } = require("express-validator");

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

    if (req.body.password !== userData.password) {
      return res.status(400).json({ errors: "Wrong credentials" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = loginUser;
