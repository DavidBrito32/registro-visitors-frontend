import axios from "axios";

export const API = axios.create({
  baseURL: "https://registro-visitors-backend.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
