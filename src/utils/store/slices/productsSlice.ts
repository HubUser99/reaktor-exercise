import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "types/types";
import { getProductsWithAvailabilities } from "utils/api/ApiInterfaceAdapter";

const initialState: ProductsState = {
    shirts: [],
    jackets: [],
    accessories: [],
};

const FETCH_PRODUCTS = "products/fetchProducts";

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
    const response = await getProductsWithAvailabilities();
    return response;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.shirts = action.payload.shirts;
            state.jackets = action.payload.jackets;
            state.accessories = action.payload.accessories;
        });
    },
});

export default productsSlice.reducer;
