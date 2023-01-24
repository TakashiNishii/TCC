import axios from "axios";

const api = axios.create({
    baseURL: "https://antipatternsapi.onrender.com",
});

export default api;