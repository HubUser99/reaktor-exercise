import { CategoryApi } from "types/api";
import { ProductsType } from "types/types";
import { parseAvailabilityDataPayload } from "utils/common/availabilitiesUtils";
import { getProductsBrands } from "utils/common/productsUtils";
import {
    getAvailabilitiesByBrand,
    getProductsByCategory,
} from "./ApiInterface";

export const getProductsWithAvailabilities = async (category: CategoryApi) => {
    const products = await getProductsByCategory(category);

    const productsBrands = getProductsBrands(products);

    const availabilities = await Promise.all(
        productsBrands.map((brand) => getAvailabilitiesByBrand(brand))
    );

    const availabilitiesData = availabilities.flatMap(
        (availability) => availability?.response ?? []
    );

    const availabilitiesProductsIds = availabilitiesData.map((data) => data.id);

    const availabilitiesPayload = availabilitiesData.map((data) =>
        parseAvailabilityDataPayload(data.DATAPAYLOAD)
    );

    const result: ProductsType = products.map((product) => {
        const { id } = product;
        const payloadIndex = availabilitiesProductsIds.indexOf(id.toUpperCase());
        const payload =
            payloadIndex > -1
                ? availabilitiesPayload[payloadIndex]
                : "not available";

        return {
            ...product,
            quantityAvailable: payload,
        };
    });

    return result;
};
