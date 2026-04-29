import express from "express";
import Offer from "../models/Offer.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const offers = await Offer.find();
  res.json(offers);
});

// CREATE
router.post("/", async (req, res) => {
  const { product, discount } = req.body;

  const existing = await Offer.findOne({ product });

  if (existing) {
    existing.discount = discount;
    await existing.save();
  } else {
    await Offer.create({ product, discount });
  }

  res.json({ message: "Saved" });
});

// DELETE
router.delete("/:product", async (req, res) => {
  await Offer.deleteOne({ product: req.params.product });
  res.json({ message: "Deleted" });
});

export default router;