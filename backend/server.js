



// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import { connectDB } from "./config/db.js";

// import offerRoutes from "./routes/offerRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js"; // ✅ BLOG ROUTE
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// // 🔥 ONLY ONE CORS
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       process.env.FRONTEND_URL,
//     ],
//     credentials: true,
//   })
// );

// app.use(express.json());

// // 🔥 uploaded images access
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/offers", offerRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/blogs", blogRoutes); // ✅ BLOG API
// app.use("/api/contact", contactRoutes);

// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });








// // ===============================
// // server.js
// // ===============================

// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import { connectDB } from "./config/db.js";

// import offerRoutes from "./routes/offerRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       process.env.FRONTEND_URL,
//     ],
//     credentials: true,
//   })
// );

// app.use(express.json());

// app.use("/uploads", express.static("uploads"));

// app.use("/api/users", userRoutes);
// app.use("/api/offers", offerRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/contact", contactRoutes);

// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(
//     `Server running on port ${PORT}`
//   );
// });






// ===============================
// server.js
// ===============================

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";

import offerRoutes from "./routes/offerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// ✅ NEW ADMIN ROUTE
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

// ✅ ADMIN ROUTE
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});