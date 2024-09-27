import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products";

export interface Product {
    image: string;
    title: string;
    price: number;
    description: string;
    rating: {
        rate:number;
        count:number;
}
}

const initialState = {
    products: [] as Product[],
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>(api)
    return response.data;
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //The below types define the return type of the action as a Product[] array.
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        })
    }
})

export default productSlice.reducer;