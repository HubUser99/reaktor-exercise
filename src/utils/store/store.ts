import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "utils/store/slices/productsSlice";

export default configureStore({
    reducer: { products: productsReducer },
});
