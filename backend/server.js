// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import offerRoutes from "./routes/offerRoutes.js";


// dotenv.config();
// connectDB();

// const app = express();

// // 🔥 ONLY ONE CORS (PRODUCTION SAFE)
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       process.env.FRONTEND_URL
//     ],
//     credentials: true,
//   })
// );

// app.use(express.json());

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/offers", offerRoutes);


// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });





//ye sahi hai







import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";

import offerRoutes from "./routes/offerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"; // ✅ NEW
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

// 🔥 ONLY ONE CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/orders", orderRoutes);   // ✅ NEW


app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});