import { CategoryApi } from "types/api";
import { AvailabilitiesType, ProductsType } from "types/types";
import { parseAvailabilityDataPayload } from "utils/common/availabilitiesUtils";
import { getProductsBrands } from "utils/common/productsUtils";
import {
    getAvailabilitiesByBrand,
    getProductsByCategory,
} from "./ApiInterface";

export const getProductsWithEmptyAvailabilities = async (
    category: CategoryApi
) => {
    const products = await getProductsByCategory(category);

    const result: ProductsType = products.map((product) => {
        const payload = "Loading...";

        return {
            ...product,
            quantityAvailable: payload,
        };
    });

    return result;
};

export const getAvailabilitiesForProducts = async (products: ProductsType) => {
    const productsBrands = getProductsBrands(products);

    const availabilitiesCategories = await Promise.all(
        productsBrands.map((brand) => getAvailabilitiesByBrand(brand))
    );

    const availabilitiesCategoriesData = availabilitiesCategories.flatMap(
        (availabilities) => availabilities?.response ?? []
    );

    const result = new Map(
        availabilitiesCategoriesData.map((data) => [
            data.id,
            parseAvailabilityDataPayload(data.DATAPAYLOAD),
        ])
    );

    return result;
};

export const getProductsWithAvailabilities = (
    products: ProductsType,
    availabilities: AvailabilitiesType
) => {
    const result = products.map((product) => ({
        ...product,
        quantityAvailable:
            availabilities.get(product.id.toUpperCase()) ?? "not available",
    }));

    return result;
};
