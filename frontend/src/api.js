



// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // USERS
// export const loginUser = (data) => API.post("/users/login", data);

// export const getMe = (token) =>
//   API.get("/users/me", {
//     headers: { Authorization: token },
//   });

// export const updateMe = (token, data) =>
//   API.put("/users/me", data, {
//     headers: { Authorization: token },
//   });

// // ================= OFFERS =================
// export const getOffers = () => API.get("/offers");

// export const createOffer = (data) => API.post("/offers", data);

// export const deleteOffer = (product) =>
//   API.delete(`/offers/${product}`);

// // ================= ORDERS =================

// export const placeOrder = (data) =>
//   API.post("/orders/place", data);

// export const getAllOrders = () =>
//   API.get("/orders/all");

// export const updateOrderStatus = (id, status) =>
//   API.put(`/orders/status/${id}`, { status });

// export const getMyOrders = (phone) =>
//   API.get(`/orders/my/${phone}`);

// // ================= BLOG =================

// // Get all blogs
// export const getBlogs = () =>
//   API.get("/blogs");

// // Create new blog
// export const createBlog = (formData) =>
//   API.post("/blogs", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });





//   //===================contact===========
//   export const createContact = (data) =>
//   API.post("/contact", data);



//   export const getContacts = () =>
//   API.get("/contact");











// ===============================
// src/api.js
// ===============================

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// USERS
export const loginUser = (data) =>
  API.post("/users/login", data);

export const getMe = (token) =>
  API.get("/users/me", {
    headers: { Authorization: token },
  });

export const updateMe = (token, data) =>
  API.put("/users/me", data, {
    headers: { Authorization: token },
  });


// ================= OFFERS =================

export const getOffers = () =>
  API.get("/offers");

export const createOffer = (data) =>
  API.post("/offers", data);

export const deleteOffer = (product) =>
  API.delete(`/offers/${product}`);


// ================= ORDERS =================

export const placeOrder = (data) =>
  API.post("/orders/place", data);

export const getAllOrders = () =>
  API.get("/orders/all");

export const updateOrderStatus = (
  id,
  status
) =>
  API.put(`/orders/status/${id}`, {
    status,
  });

export const getMyOrders = (phone) =>
  API.get(`/orders/my/${phone}`);


// ================= BLOG =================

// Get all blogs
export const getBlogs = () =>
  API.get("/blogs");

// Create blog
export const createBlog = (formData) =>
  API.post("/blogs", formData, {
    headers: {
      "Content-Type":
        "multipart/form-data",
    },
  });

// Like / Unlike blog
export const likeBlog = (
  blogId,
  userId
) =>
  API.put(`/blogs/${blogId}/like`, {
    userId,
  });


// ================= CONTACT =================

export const createContact = (data) =>
  API.post("/contact", data);

export const getContacts = () =>
  API.get("/contact");







//================Admin ================
export const adminLogin = (data) =>
  API.post("/admin/login", data);

export const verifyAdmin = (token) =>
  API.get("/admin/verify", {
    headers: { Authorization: token },
  });









  // Add Comment
export const addComment = (blogId, data, token) =>
  API.post(`/blogs/${blogId}/comment`, data, {
    headers: { Authorization: token },
  });