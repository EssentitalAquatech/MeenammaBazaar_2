// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// export const loginUser = (data) => API.post("/login", data);

// export const getMe = (token) =>
//   API.get("/me", {
//     headers: { Authorization: token },
//   });

// export const updateMe = (token, data) =>
//   API.put("/me", data, {
//     headers: { Authorization: token },
//   });




import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// USERS
export const loginUser = (data) => API.post("/users/login", data);

export const getMe = (token) =>
  API.get("/users/me", {
    headers: { Authorization: token },
  });

export const updateMe = (token, data) =>
  API.put("/users/me", data, {
    headers: { Authorization: token },
  });

// ================= OFFERS (FIXED) =================
export const getOffers = () => API.get("/offers");  // ✅ correct
export const createOffer = (data) => API.post("/offers", data);
export const deleteOffer = (product) =>
  API.delete(`/offers/${product}`);





// ================= ORDERS =================

export const placeOrder = (data) =>
  API.post("/orders/place", data);

export const getAllOrders = () =>
  API.get("/orders/all");

export const updateOrderStatus = (id, status) =>
  API.put(`/orders/status/${id}`, { status });








export const getMyOrders = (phone) =>
  API.get(`/orders/my/${phone}`);