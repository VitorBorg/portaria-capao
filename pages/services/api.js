import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3041/api'
})

export default api