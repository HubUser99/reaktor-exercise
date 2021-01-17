import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "types/types";
import { getProductsWithAvailabilities } from "utils/api/ApiInterfaceAdapter";

const initialState: ProductsState = {
    gloves: [],
    facemasks: [],
    beanies: [],
    status: "loading",
    error: null,
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
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.error = null;
            state.status = "loading";
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.gloves = action.payload.gloves;
            state.facemasks = action.payload.facemasks;
            state.beanies = action.payload.beanies;
            state.status = "succeeded";
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = "Products could not be fetched";
            state.status = "failed";
        });
    },
});

export default productsSlice.reducer;
