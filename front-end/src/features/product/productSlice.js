import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk('product/get', async (thunlAPI) => {
    try {
        return await productService.getProducts();
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})

export const getAProducts = createAsyncThunk('product/getAProduct', async (id, thunlAPI) => {
    try {
        return await productService.getSignleProducts(id);
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})


export const addToWishlist = createAsyncThunk('product/wishlist', async (prodId, thunlAPI) => {
    try {
        return await productService.addToWishlist(prodId);
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})


const initialState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'product',
    initialState: initialState,
    redirect: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }).addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(addToWishlist.pending, (state) => {
            state.isLoading = true;
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishlist = action.payload;
            state.message = "Đã thêm sản phẩm vào danh sách yêu thích"
        }).addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(getAProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleproduct = action.payload;
        }).addCase(getAProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})
export default authSlice.reducer;