import axios from "axios";

const api = axios.create({
    baseURL: "https://antipatternsapi.onrender.com",
    //baseURL: "http://192.168.0.181:3000",
});

export default api;