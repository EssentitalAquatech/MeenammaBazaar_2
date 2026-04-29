import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3>{blog.name}</h3>

      <p>{blog.text}</p>

      {blog.image && (
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          alt="blog"
          className="blog-img"
        />
      )}

      <small>
        {new Date(blog.createdAt).toLocaleDateString()}
      </small>
    </div>
  );
};

export default BlogCard;