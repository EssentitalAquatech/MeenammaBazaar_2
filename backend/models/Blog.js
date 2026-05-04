







// // ===============================
// // models/Blog.js (UPDATED)
// // ===============================

// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     phone: { // ✅ NEW FIELD
//       type: String,
//       required: true,
//     },

//     text: {
//       type: String,
//       required: true,
//     },

//     image: {
//       type: String,
//       default: "",
//     },

//     likes: {
//       type: Number,
//       default: 0,
//     },

//     likedUsers: {
//       type: [String],
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Blog", blogSchema);











// ===============================
// models/Blog.js (FINAL)
// ===============================

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: String,
  name: String,
  phone: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    likes: {
      type: Number,
      default: 0,
    },

    likedUsers: {
      type: [String],
      default: [],
    },

    comments: [commentSchema], // ✅ NEW
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);  