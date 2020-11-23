import { ProductItemApi } from "./api";

export interface ProductItemType extends ProductItemApi {
    quantityAvailable?: number;
}

export type ProductsType = Array<ProductItemType>;
