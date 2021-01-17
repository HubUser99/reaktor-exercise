import { RootState } from "types/types";

export const selectGlovesProducts = (state: RootState) => state.products.gloves;

export const selectFacemasksProducts = (state: RootState) =>
    state.products.facemasks;

export const selectBeaniesProducts = (state: RootState) =>
    state.products.beanies;

export const selectProductsStatus = (state: RootState) => state.products.status;
