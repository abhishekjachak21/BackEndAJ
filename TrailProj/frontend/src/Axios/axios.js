import axios from "axios"
const instance = axios.create({
    // baseURL:"https://todoappv3be.onrender.com"
    baseURL:"https://localhost:8001"
    // baseURL:"https://todoappv3be.onrender.com/api/"
})
export default instance