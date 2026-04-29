import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
});

export default mongoose.model("User", userSchema);