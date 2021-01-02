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

export type AvailabilitiesType = Map<string, QuantityType>;

export interface ProductsState {
    shirts: ProductsType;
    jackets: ProductsType;
    accessories: ProductsType;
}

export interface RootState {
    products: ProductsState;
}
