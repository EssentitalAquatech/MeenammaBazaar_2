import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);