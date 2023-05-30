import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://localhost:5000/api/',
    // timeout: 8000,
    headers: {
      "Content-Type": 'application/json',
    },
  });
  export default axiosApi;