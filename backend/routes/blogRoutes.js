// import express from "express";
// import multer from "multer";
// import Blog from "../models/Blog.js";

// const router = express.Router();


// // Storage setup
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },

//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });


// // Create Blog
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const { name, text } = req.body;

//     const blog = new Blog({
//       name,
//       text,
//       image: req.file ? req.file.filename : "",
//     });

//     await blog.save();

//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// // Get All Blogs
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;









// ===============================
// routes/blogRoutes.js
// ===============================

import express from "express";
import multer from "multer";
import Blog from "../models/Blog.js";

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

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, text } = req.body;

    const blog = new Blog({
      name,
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

export default router;