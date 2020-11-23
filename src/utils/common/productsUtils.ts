import { ProductsApi } from "types/api";

export const getProductsBrands = (products: ProductsApi) => {
    return [...new Set(products.map((product) => product.manufacturer))];
};
