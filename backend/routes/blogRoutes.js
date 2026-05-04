

// ===============================
// routes/blogRoutes.js
// ===============================

import express from "express";
import multer from "multer";
import Blog from "../models/Blog.js";


import User from "../models/User.js";
import { auth } from "../middleware/auth.js";



const router = express.Router();


// ===============================
// Multer Storage
// ===============================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


// ===============================
// CREATE BLOG
// POST /api/blogs
// ===============================
// ===============================
// CREATE BLOG (UPDATED)
// ===============================

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, text, phone } = req.body; // ✅ phone लिया

    // ✅ basic validation
    if (!phone || phone.length !== 10) {
      return res.status(400).json({
        message: "Valid 10 digit phone number required",
      });
    }

    const blog = new Blog({
      name,
      phone, // ✅ save किया
      text,
      image: req.file ? req.file.filename : "",
    });

    await blog.save();

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// ===============================
// GET ALL BLOGS
// GET /api/blogs
// ===============================

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// ===============================
// LIKE / UNLIKE BLOG
// PUT /api/blogs/:id/like
// ===============================

router.put("/:id/like", async (req, res) => {
  try {
    const { userId } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    const alreadyLiked =
      blog.likedUsers.includes(userId);

    if (alreadyLiked) {
      // Unlike
      blog.likes -= 1;

      blog.likedUsers =
        blog.likedUsers.filter(
          (id) => id !== userId
        );
    } else {
      // Like
      blog.likes += 1;

      blog.likedUsers.push(userId);
    }

    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});




// ===============================
// ADD COMMENT (SECURE)
// POST /api/blogs/:id/comment
// ===============================

router.post("/:id/comment", auth, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: "Comment text required",
      });
    }

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // ✅ logged-in user fetch
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const newComment = {
      userId: user._id,
      name: user.name,
      phone: user.phone,
      text,
    };

    blog.comments.push(newComment);

    await blog.save();

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;