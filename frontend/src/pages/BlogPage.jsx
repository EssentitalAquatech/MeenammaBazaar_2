import React, { useEffect, useState } from "react";
import { getBlogs, createBlog } from "../api";
import BlogCard from "../components/BlogCard";
import "./BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // 🔥 Get all blogs
  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 🔥 Create blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("text", text);
      if (image) formData.append("image", image);

      await createBlog(formData);

      // reset form
      setName("");
      setText("");
      setImage(null);
      setShowForm(false);

      // refresh blogs
      fetchBlogs();
    } catch (error) {
      console.log("Error creating blog:", error);
    }
  };

  return (
    <div className="blog-page">

      <h1>📢 Meenamma Community Blogs</h1>

      {/* Create Button */}
      <button
        className="create-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Create Your Blog"}
      </button>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="blog-form">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Write your blog..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit">
            🚀 Post Blog
          </button>

        </form>
      )}

      {/* Blogs List */}
      <div className="blog-list">
        {blogs.length === 0 ? (
          <p>No blogs yet. Be the first one!</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        )}
      </div>

    </div>
  );
};

export default BlogPage;