


// // ===============================
// // models/Blog.js
// // ===============================

// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     name: {
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
// models/Blog.js (UPDATED)
// ===============================

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: { // ✅ NEW FIELD
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
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);