import { getBaseUrl } from "utils/common/environment";

const requestInit: RequestInit = {
    method: "GET",
    mode: "cors",
    cache: "default",
    headers: {
        Accept: "application/json",
        // "x-force-error-mode": "all",
    },
};

export const getProductsWithAvailabilities = async () => {
    const url = getBaseUrl();
    const products = (await fetch(url, requestInit)).json();;

    return products;
};
