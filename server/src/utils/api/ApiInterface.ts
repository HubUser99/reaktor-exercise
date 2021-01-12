import { AvailabilitiesApi, CategoryApi, ProductsApi } from "types/api";
import {
    parseAvailabilitiesUrl,
    parseProductsUrl,
} from "utils/common/urlParser";
import { tryFetch } from "./persistentFetch";

export const getProductsByCategory = async (
    category: CategoryApi
): Promise<ProductsApi> => {
    const productsUrl = parseProductsUrl(category);
    const response = await tryFetch(productsUrl, () => true);
    
    return response;
};

export const getAvailabilitiesByBrand = async (
    brand: string
): Promise<AvailabilitiesApi | undefined> => {
    const availabilitiesUrl = parseAvailabilitiesUrl(brand);
    const response = await tryFetch(
        availabilitiesUrl,
        (data) => data.response.toString() !== "[]"
    );

    return response;
};
