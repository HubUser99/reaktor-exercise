export const getBaseUrl = () => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    if (!baseUrl) {
        throw new Error(
            "REACT_APP_API_BASE_URL environment variable is not defined"
        );
    }

    return baseUrl;
};
