import axios from "axios";

const axiosInstance = axios.create({baseURL: "https://linkstagram-api.ga/"});

export default axiosInstance