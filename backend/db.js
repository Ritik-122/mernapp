const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://tastytreats:tasty123@cluster0.f599lll.mongodb.net/tastytreat?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true });
  try {
    console.log("connected");

    await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray(function (err, data) {
        if(err)console.log(err)
        else
        console.log();
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = mongoDB;
