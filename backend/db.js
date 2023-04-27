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
      .toArray(async function (err, data) {
        const foodCategory=await mongoose.connection.db.collection('foodCategory');
          foodCategory.find({}).toArray(function(err,catData){
            if(err)console.log(err)
            else{
              global.food_items=data;
              global.foodCategory=catData;
            }
          }) 
        // if(err)console.log(err)
        // else{
        //   global.food_items=data;
        
        // }
        
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = mongoDB;
