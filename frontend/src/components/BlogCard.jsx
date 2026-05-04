


// // ==========================================
// // BlogCard.jsx
// // ==========================================

// import React, {
//   useState,
// } from "react";

// import {
//   likeBlog,
// } from "../api";


// const BlogCard = ({
//   blog,
//   refreshBlogs,
// }) => {
//   const [loading, setLoading] =
//     useState(false);

//   const userId =
//     localStorage.getItem(
//       "userId"
//     ) || "guest-user";

//   const isLiked =
//     blog.likedUsers?.includes(
//       userId
//     );

//   const handleLike =
//     async () => {
//       try {
//         setLoading(true);

//         await likeBlog(
//           blog._id,
//           userId
//         );

//         refreshBlogs();
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//   const handleShare =
//     async () => {
//       try {
//         if (navigator.share) {
//           await navigator.share({
//             title:
//               "Meenamma Blog",
//             text: blog.text,
//             url:
//               window.location
//                 .href,
//           });
//         } else {
//           await navigator.clipboard.writeText(
//             window.location
//               .href
//           );
//           alert(
//             "Link copied!"
//           );
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//   const date =
//     new Date(blog.createdAt);

//   return (
//     <div className="blog-card">

//       <div className="blog-top-bar">

//         <div className="blog-user-box">
//           👤{" "}
//           <strong>
//             {blog.name}
//           </strong>
//         </div>

//         <div className="blog-time-box">
//           <span>
//             {date.toLocaleDateString()}
//           </span>

//           <span>
//             {date.toLocaleTimeString(
//               [],
//               {
//                 hour:
//                   "2-digit",
//                 minute:
//                   "2-digit",
//               }
//             )}
//           </span>
//         </div>

//       </div>

//       {blog.image && (
//         <img
//           src={`http://localhost:5000/uploads/${blog.image}`}
//           className="blog-img"
//           alt=""
//         />
//       )}

//       <div className="blog-content">
//         {blog.text}
//       </div>

//       <div className="blog-action-bar">

//         <button
//           className={`blog-like-btn ${
//             isLiked
//               ? "liked"
//               : ""
//           }`}
//           onClick={
//             handleLike
//           }
//           disabled={
//             loading
//           }
//         >
//           <i className="fa-jelly fa-regular fa-heart"></i>
//           <span>
//             {blog.likes ||
//               0}
//           </span>
//         </button>
// <button
//   className="blog-share-btn"
//   onClick={handleShare}
// >
//   <i className="fa-solid fa-share-nodes"></i>
// </button>

//       </div>
//     </div>
//   );
// };

// export default BlogCard;














// ==========================================
// BlogCard.jsx (FIXED)
// ==========================================

import React, { useState } from "react";
import { likeBlog, addComment } from "../api";

const BlogCard = ({ blog, refreshBlogs }) => {
  const [loading, setLoading] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");

  const userId =
    localStorage.getItem("userId") || "guest-user";

  const isLiked =
    blog.likedUsers?.includes(userId);

  // ================= LIKE =================
  const handleLike = async () => {
    try {
      setLoading(true);
      await likeBlog(blog._id, userId);
      refreshBlogs();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= SHARE =================
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Meenamma Blog",
          text: blog.text,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );
        alert("Link copied!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ================= COMMENT =================
  const handleComment = async () => {
    try {
      const token = localStorage.getItem("token"); // ✅ FIX

      // ✅ पहले check करो
      if (!token) {
        alert("Please login first");
        window.location.href = "/login";
        return;
      }

      if (!comment.trim()) {
        alert("Write something...");
        return;
      }

      await addComment(
        blog._id,
        { text: comment },
        token
      );

      setComment("");
      refreshBlogs();
    } catch (error) {
      console.log(error);

      // ✅ अगर backend से 401 आया
      if (error.response?.status === 401) {
        alert("Please do Login first");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  };

  const date = new Date(blog.createdAt);

  return (
    <div className="blog-card">

      {/* HEADER */}
      <div className="blog-top-bar">
        <div className="blog-user-box">
          👤 <strong>{blog.name}</strong>
        </div>

        <div className="blog-time-box">
          <span>{date.toLocaleDateString()}</span>
          <span>
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>

      {/* IMAGE */}
      {blog.image && (
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          className="blog-img"
          alt=""
        />
      )}

      {/* TEXT */}
      <div className="blog-content">
        {blog.text}
      </div>

      {/* ACTIONS */}
      <div className="blog-action-bar">

        {/* LIKE */}
        <button
          className={`blog-like-btn ${
            isLiked ? "liked" : ""
          }`}
          onClick={handleLike}
          disabled={loading}
        >
          ❤️ {blog.likes || 0}
        </button>

        {/* SHARE */}
        <button
          className="blog-share-btn"
          onClick={handleShare}
        >
          🔗
        </button>

        {/* COMMENT BUTTON */}
        <button
          className="blog-comment-btn"
          onClick={() =>
            setShowComment(!showComment)
          }
        >
          💬 {blog.comments?.length || 0}
        </button>

      </div>

      {/* COMMENT INPUT */}
      {showComment && (
        <div className="comment-box">

          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
          />

          <button onClick={handleComment}>
            Post
          </button>

          {/* COMMENT LIST */}
          <div className="comment-list">
            {blog.comments?.map((c, i) => (
              <div key={i} className="comment-item">
                <strong>{c.name}</strong>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default BlogCard;