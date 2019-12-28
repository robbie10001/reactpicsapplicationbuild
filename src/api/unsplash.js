import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 0e547942e9e083d888beef77e66cd28148d3b25c674d49b1f67c4a81d63af71c"
    }
});









