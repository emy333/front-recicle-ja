import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: "http://localhost:8080",
    baseURL: "https://recile-1qhjo2wt.b4a.run",
});

export default axiosInstance;