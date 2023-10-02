import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  uniqueID: {
    type: String,
  },
  role: {
    type: String,
    enum: ["WholeSheller", "Shopkeeper", "User"],
  },
});
const User = mongoose.model("User", userSchema);
export default User;
