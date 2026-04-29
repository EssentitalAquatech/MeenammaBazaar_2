import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  product: String,
  discount: Number,
});

export default mongoose.model("Offer", offerSchema);