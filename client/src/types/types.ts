import { ProductItemApi } from "./api";

export interface ProductItemType extends ProductItemApi {
    quantityAvailable: QuantityType;
}

export type QuantityType =
    | "INSTOCK"
    | "LESSTHAN10"
    | "OUTOFSTOCK"
    | "not available"
    | "Loading...";

export type ProductsType = Array<ProductItemType>;

export type StatusType = "loading" | "succeeded" | "failed";

export type ErrorType = string | null;

export interface ProductsState {
    gloves: ProductsType;
    facemasks: ProductsType;
    beanies: ProductsType;
    status: StatusType;
    error: ErrorType;
}

export interface RootState {
    products: ProductsState;
}
