import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:3008/",
    headers: {
        "Content-Type": "application/json"
    }
});