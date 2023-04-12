import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

const getCustomerfromLocalStorage = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : null;

const initialState = {
    user: getCustomerfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const registerUser = createAsyncThunk('auth/register', async (userDate, thunlAPI) => {
    try {
        return await authService.register(userDate);
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk('auth/login', async (userDate, thunlAPI) => {
    try {
        return await authService.login(userDate);
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})
export const getUserProductWishlist = createAsyncThunk('user/wishlist', async (thunlAPI) => {
    try {
        return await authService.getUserWishlist();
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})

export const addProdToCart = createAsyncThunk('user/cart/add', async (cartData, thunlAPI) => {
    try {
        return await authService.addToCart(cartData);
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})

export const getUserCart = createAsyncThunk('user/cart/get', async (thunlAPI) => {
    try {
        return await authService.getcart();
    } catch (error) {
        return thunlAPI.rejectWithValue(error)
    }
})



export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    redirect: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createUser = action.payload;
            if (state.isSuccess === true) {
                toast.info("Bạn đã đăng ký thành công ")
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem('token', action.payload.token)
                toast.info("Bạn đã đăng nhập thành công ")
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error("Mật khẩu hoặc tài khoản đã sai ")
            }
        }).addCase(getUserProductWishlist.pending, (state) => {
            state.isLoading = true;
        }).addCase(getUserProductWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.wishlist = action.payload;
        }).addCase(getUserProductWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(addProdToCart.pending, (state) => {
            state.isLoading = true;
        }).addCase(addProdToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cartProduct = action.payload;
            if (state.isSuccess) {
                toast.success('Bạn đã thêm sản phẩm vào giở hàng')
            }
        }).addCase(addProdToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(getUserCart.pending, (state) => {
            state.isLoading = true;
        }).addCase(getUserCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cartProducts = action.payload;
            if (state.isSuccess) {
                toast.success('Bạn đã thêm sản phẩm vào giở hàng')
            }
        }).addCase(getUserCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })

    }
})
export default authSlice.reducer;