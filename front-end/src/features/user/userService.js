import axios from 'axios'
import { base_url, config } from '../../utils/base_url';
const register = async (userDate) => {
    const response = await axios.post(`${base_url}user/register`, userDate);
    if (response.data) {
        localStorage.setItem('customer', JSON.stringify(response.data))
    }
    return response.data;
}
const login = async (userDate) => {
    const response = await axios.post(`${base_url}user/login`, userDate);
    if (response.data) {
        return response.data;
    }
}

const getUserWishlist = async (userDate) => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
}

const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config);
    if (response.data) {
        return response.data;
    }
}

const getcart = async () => {
    const response = await axios.get(`${base_url}user/cart`, config);
    if (response.data) {
        return response.data;
    }
}

export const authService = {
    register,
    login,
    getUserWishlist,
    getUserWishlist,
    addToCart,
    getcart
}