// import express from "express";
// import Order from "../models/Order.js";

// const router = express.Router();

// router.post("/place", async (req, res) => {
//   try {
//     console.log("REQ BODY =", req.body);

//     const newOrder = new Order(req.body);

//     await newOrder.save();

//     console.log("ORDER SAVED");

//     res.status(201).json({
//       success: true,
//       message: "Order Placed",
//     });
//   } catch (error) {
//     console.log("ORDER ERROR =", error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// router.get("/all", async (req, res) => {
//   try {
//     const orders = await Order.find().sort({
//       createdAt: -1,
//     });

//     res.json(orders);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// router.put("/status/:id", async (req, res) => {
//   try {
//     const updated = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status: req.body.status },
//       { new: true }
//     );

//     res.json(updated);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;









import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/place", async (req, res) => {
  try {
    console.log("REQ BODY =", req.body);

    const newOrder = new Order(req.body);

    await newOrder.save();

    console.log("ORDER SAVED");

    res.status(201).json({
      success: true,
      message: "Order Placed",
    });
  } catch (error) {
    console.log("ORDER ERROR =", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// ================= USER NOTIFICATION / MY ORDERS =================
router.get("/my/:phone", async (req, res) => {
  try {
    const data = await Order.find({
      "customer.phone": req.params.phone,
    }).sort({ createdAt: -1 });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/status/:id", async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;