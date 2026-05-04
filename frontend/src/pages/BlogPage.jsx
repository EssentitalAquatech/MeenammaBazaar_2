

// // ==========================================
// // BlogPage.jsx
// // ==========================================

// import React, { useEffect,useState,} from "react";

// import { getBlogs,createBlog,} from "../api";

// import BlogCard from "../components/BlogCard";

// import "./BlogPage.css";

// const BlogPage = () => {
//   const [blogs, setBlogs] =
//     useState([]);

//   const [name, setName] =
//     useState("");

//   const [text, setText] =
//     useState("");

//   const [image, setImage] =
//     useState(null);

//   const [showForm, setShowForm] =
//     useState(false);

//   const fetchBlogs = async () => {
//     try {
//       const res =
//         await getBlogs();

//       setBlogs(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleSubmit = async (
//     e
//   ) => {
//     e.preventDefault();

//     try {
//       const formData =
//         new FormData();

//       formData.append(
//         "name",
//         name
//       );

//       formData.append(
//         "text",
//         text
//       );

//       if (image) {
//         formData.append(
//           "image",
//           image
//         );
//       }

//       await createBlog(
//         formData
//       );

//       setName("");
//       setText("");
//       setImage(null);
//       setShowForm(false);

//       fetchBlogs();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="blog-page">

//       {/* HEADER */}
//       <div className="blog-fixed-header">

//         <h1 className="blog-page-title">
//           Welcome to{" "}
//           <span>
//             Meenamma Community Blogs
//           </span>
//         </h1>

//         <button
//           className="blog-create-btn"
//           onClick={() =>
//             setShowForm(!showForm)
//           }
//         >
//           {showForm
//             ? "Close Form"
//             : "Create Blog"}
//         </button>

//       </div>

//       {/* FORM */}
//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           className="blog-form"
//         >
//           <div className="blog-form-box">

//             <h2 className="blog-form-title">
//               Create Your Blog
//             </h2>

//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) =>
//                 setName(
//                   e.target.value
//                 )
//               }
//               required
//             />

//             <textarea
//               placeholder="Write your blog..."
//               value={text}
//               onChange={(e) =>
//                 setText(
//                   e.target.value
//                 )
//               }
//               required
//             />

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setImage(
//                   e.target.files[0]
//                 )
//               }
//             />

//             <div className="blog-form-actions">

//               <button
//                 type="button"
//                 className="blog-cancel-btn"
//                 onClick={() =>
//                   setShowForm(false)
//                 }
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="blog-post-btn"
//               >
//                 Post Blog
//               </button>

//             </div>

//           </div>
//         </form>
//       )}

//       {/* BLOGS */}
//       <div className="blog-list">
//         {blogs.length === 0 ? (
//           <p className="blog-empty">
//             No blogs yet.
//           </p>
//         ) : (
//           blogs.map(
//             (blog) => (
//               <BlogCard
//                 key={blog._id}
//                 blog={blog}
//                 refreshBlogs={
//                   fetchBlogs
//                 }
//               />
//             )
//           )
//         )}
//       </div>

//     </div>
//   );
// };

// export default BlogPage;
















// ==========================================
// BlogPage.jsx (UPDATED)
// ==========================================

import React, { useEffect, useState } from "react";
import { getBlogs, createBlog } from "../api";
import BlogCard from "../components/BlogCard";
import "./BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // ✅ NEW
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ simple validation
    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("phone", phone); // ✅ NEW
      formData.append("text", text);

      if (image) {
        formData.append("image", image);
      }

      await createBlog(formData);

      // reset
      setName("");
      setPhone(""); // ✅ NEW
      setText("");
      setImage(null);
      setShowForm(false);

      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="blog-page">

      {/* HEADER */}
      <div className="blog-fixed-header">
        <h1 className="blog-page-title">
          Welcome to <span>Meenamma Community Blogs</span>
        </h1>

        <button
          className="blog-create-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Create Post"}
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="blog-form-box">

            <h2 className="blog-form-title">
              Create Your Post
            </h2>

            {/* NAME */}
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* ✅ PHONE NUMBER */}
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/\D/g, "")
                )
              }
              maxLength={10}
              required
            />

            {/* BLOG */}
            <textarea
              placeholder="Write your blog..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />

            {/* IMAGE */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
            />

            <div className="blog-form-actions">

              <button
                type="button"
                className="blog-cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="blog-post-btn"
              >
                Post
              </button>

            </div>

          </div>
        </form>
      )}

      {/* BLOGS */}
      <div className="blog-list">
        {blogs.length === 0 ? (
          <p className="blog-empty">
            No Post yet.
          </p>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              refreshBlogs={fetchBlogs}
            />
          ))
        )}
      </div>

    </div>
  );
};

export default BlogPage;