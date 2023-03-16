import axios from "axios";

const axiosNetworkManager = axios.create({
    url:"http://localhost:3000"
})

export default axiosNetworkManager;