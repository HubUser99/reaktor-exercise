export const getBaseUrl = () => {
    const baseUrl = process.env.API_BASE_URL;

    if (!baseUrl) {
        throw new Error(
            "API_BASE_URL environment variable is not defined"
        );
    }

    return baseUrl;
};

export const getProductsPath = () => {
    const productsPath = process.env.API_PRODUCTS_BY_CATEGORY_PATH;

    if (!productsPath) {
        throw new Error(
            "API_PRODUCTS_BY_CATEGORY_PATH environment variable is not defined"
        );
    }

    return productsPath;
};

export const getAvailabilitiesPath = () => {
    const availabilitiesPath =
        process.env.API_AVAILABILITIES_BY_BRAND_PATH;

    if (!availabilitiesPath) {
        throw new Error(
            "API_AVAILABILITIES_BY_BRAND_PATH environment variable is not defined"
        );
    }

    return availabilitiesPath;
};

export const getProductsUrl = () => {
    return getBaseUrl() + getProductsPath();
};

export const getAvailabilitiesUrl = () => {
    return getBaseUrl() + getAvailabilitiesPath();
};
