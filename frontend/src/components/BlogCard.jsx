


// ==========================================
// BlogCard.jsx
// ==========================================

import React, {
  useState,
} from "react";

import {
  likeBlog,
} from "../api";


const BlogCard = ({
  blog,
  refreshBlogs,
}) => {
  const [loading, setLoading] =
    useState(false);

  const userId =
    localStorage.getItem(
      "userId"
    ) || "guest-user";

  const isLiked =
    blog.likedUsers?.includes(
      userId
    );

  const handleLike =
    async () => {
      try {
        setLoading(true);

        await likeBlog(
          blog._id,
          userId
        );

        refreshBlogs();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleShare =
    async () => {
      try {
        if (navigator.share) {
          await navigator.share({
            title:
              "Meenamma Blog",
            text: blog.text,
            url:
              window.location
                .href,
          });
        } else {
          await navigator.clipboard.writeText(
            window.location
              .href
          );
          alert(
            "Link copied!"
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

  const date =
    new Date(blog.createdAt);

  return (
    <div className="blog-card">

      <div className="blog-top-bar">

        <div className="blog-user-box">
          👤{" "}
          <strong>
            {blog.name}
          </strong>
        </div>

        <div className="blog-time-box">
          <span>
            {date.toLocaleDateString()}
          </span>

          <span>
            {date.toLocaleTimeString(
              [],
              {
                hour:
                  "2-digit",
                minute:
                  "2-digit",
              }
            )}
          </span>
        </div>

      </div>

      {blog.image && (
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          className="blog-img"
          alt=""
        />
      )}

      <div className="blog-content">
        {blog.text}
      </div>

      <div className="blog-action-bar">

        <button
          className={`blog-like-btn ${
            isLiked
              ? "liked"
              : ""
          }`}
          onClick={
            handleLike
          }
          disabled={
            loading
          }
        >
          <i className="fa-jelly fa-regular fa-heart"></i>
          <span>
            {blog.likes ||
              0}
          </span>
        </button>
<button
  className="blog-share-btn"
  onClick={handleShare}
>
  <i className="fa-solid fa-share-nodes"></i>
</button>

      </div>
    </div>
  );
};

export default BlogCard;