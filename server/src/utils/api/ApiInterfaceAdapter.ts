import { CategoryApi } from "types/api";
import { AvailabilitiesType, ProductItemType, ProductsType } from "types/types";
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

export const getAvailabilitiesForProducts = async (
    products: ProductsType
): Promise<AvailabilitiesType> => {
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

export const getProductsWithAvailabilities = async () => {
    const products = await Promise.all([
        getProductsWithEmptyAvailabilities("shirts"),
        getProductsWithEmptyAvailabilities("jackets"),
        getProductsWithEmptyAvailabilities("accessories"),
    ]);

    const availabilities = await getAvailabilitiesForProducts(products.flat());

    const result = products.reduce(
        (prevState, currentValue, currentIndex) => {
            const productsWithAvailabilities: ProductsType = currentValue.map(
                (product) => ({
                    ...product,
                    quantityAvailable:
                        availabilities.get(product.id.toUpperCase()) ??
                        "not available",
                })
            );

            switch (currentIndex) {
                case 0:
                    prevState.shirts = productsWithAvailabilities;
                    break;
                case 1:
                    prevState.jackets = productsWithAvailabilities;
                    break;
                case 2:
                    prevState.accessories = productsWithAvailabilities;
                    break;
            }

            return prevState;
        },
        {
            shirts: [],
            jackets: [],
            accessories: [],
        } as {
            shirts: ProductsType;
            jackets: ProductsType;
            accessories: ProductsType;
        }
    );

    return result;
};
