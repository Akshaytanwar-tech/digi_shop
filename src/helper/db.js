const mongoose = require("mongoose");

const connectTomongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("connect to mongoDB");
    });
  } catch (error) {
    if (error) {
      console.log(error);
      console.log("Not connected to db");
    }
  }
};

export default connectTomongo;
