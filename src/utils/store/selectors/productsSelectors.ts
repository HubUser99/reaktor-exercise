import { RootState } from "types/types";

export const selectShirtsProducts = (state: RootState) => state.products.shirts;

export const selectJacketsProducts = (state: RootState) =>
    state.products.jackets;

export const selectAccessoriesProducts = (state: RootState) =>
    state.products.accessories;
