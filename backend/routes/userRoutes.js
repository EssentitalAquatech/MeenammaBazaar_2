import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// LOGIN / REGISTER
router.post("/login", async (req, res) => {
  const { name, phone, address } = req.body;

  let user = await User.findOne({ phone });

  if (!user) {
    user = await User.create({ name, phone, address });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
});

// GET PROFILE
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});

// UPDATE PROFILE
router.put("/me", auth, async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.userId,
    req.body,
    { new: true }
  );

  res.json(updated);
});

export default router;