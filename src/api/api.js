// frontend/src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://mock-ecom-backend-1.onrender.com/api",
});


// Automatically attach token to every request if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProducts = () => API.get("/products");
export const getCart = () => API.get("/cart");
export const addToCart = (data) => API.post("/cart", data);
export const removeFromCart = (id) => API.delete(`/cart/${id}`);
export const checkout = (data) => API.post("/checkout", data);
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
