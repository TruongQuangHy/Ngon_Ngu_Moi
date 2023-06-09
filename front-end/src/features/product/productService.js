import axios from 'axios'
import { base_url, config } from '../../utils/base_url';

const getProducts = async () => {
    const response = await axios.get(`${base_url}product`);
    if (response.data) {
        return response.data;
    }
}

const getSignleProducts = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);
    if (response.data) {
        return response.data;
    }
}

const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
    if (response.data) {
        return response.data;
    }
}

export const productService = {
    getProducts,
    addToWishlist,
    getSignleProducts
}


