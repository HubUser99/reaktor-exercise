import { CategoryApi } from "types/api";
import { getAvailabilitiesUrl, getProductsUrl } from "./environment";

export const parse = (url: string, valueToInsert: string) => {
    const splitUrl = url.split("$");
    const result = splitUrl[0] + valueToInsert;

    return result;
};

export const parseProductsUrl = (category: CategoryApi) => {
    const productsUrl = getProductsUrl();

    return parse(productsUrl, category);
};

export const parseAvailabilitiesUrl = (brand: string) => {
    const availabilitiesUrl = getAvailabilitiesUrl();

    return parse(availabilitiesUrl, brand);
};
