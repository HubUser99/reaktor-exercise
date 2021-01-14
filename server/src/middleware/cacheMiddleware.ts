import { RequestHandler } from "express";
import NodeCache from "node-cache";
import { getProductsWithAvailabilities } from "utils/api/ApiInterfaceAdapter";

export const cacheMiddleware = (cacheInstance: NodeCache): RequestHandler => {
    return async (req, res, next) => {
        const cachedBody = cacheInstance.get("products");

        if (cachedBody) {
            next();
        } else {
            await updateCache(cacheInstance);
            console.log("Updated cache!");
            
            next();
        }
    };
};

export const updateCache = async (cacheInstance: NodeCache) => {
    console.log("Updating cache...");
    
    const products = await getProductsWithAvailabilities();
    return cacheInstance.set("products", products);
};