export const getBaseUrl = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    if (!baseUrl) {
        throw new Error(
            "REACT_APP_API_BASE_URL environment variable is not defined"
        );
    }

    return baseUrl;
};

export const getProductsPath = () => {
    const productsPath = process.env.REACT_APP_API_PRODUCTS_BY_CATEGORY_PATH;

    if (!productsPath) {
        throw new Error(
            "REACT_APP_API_PRODUCTS_BY_CATEGORY_PATH environment variable is not defined"
        );
    }

    return productsPath;
};

export const getAvailabilitiesPath = () => {
    const availabilitiesPath =
        process.env.REACT_APP_API_AVAILABILITIES_BY_BRAND_PATH;

    if (!availabilitiesPath) {
        throw new Error(
            "REACT_APP_API_AVAILABILITIES_BY_BRAND_PATH environment variable is not defined"
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
