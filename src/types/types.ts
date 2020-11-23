import { ProductItemApi } from "./api";

export interface ProductItemType extends ProductItemApi {
    quantityAvailable: string;
}

export type ProductsType = Array<ProductItemType>;
