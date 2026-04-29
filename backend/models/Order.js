import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    size: String,
    price: Number,
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      phone: String,
      address: String,
    },

    items: {
      type: [itemSchema],
      default: [],
    },

    total: Number,
    date: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

// Delete old model if exists
if (mongoose.models.Order) {
  delete mongoose.models.Order;
}

const Order = mongoose.model("Order", orderSchema);

export default Order;