import axios from "axios";

// Add your RAWG API key to .env file as VITE_RAWG_API_KEY
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const axiosRAWG = axios.create({
    baseURL: `https://api.rawg.io/api`,
    params: {
        key: API_KEY
    }
})

const useRAWG = () => {
    return axiosRAWG;
};

export default useRAWG;