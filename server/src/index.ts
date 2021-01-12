import express, { RequestHandler } from "express";
import NodeCache from "node-cache";
import { getProductsWithAvailabilities } from "utils/api/ApiInterfaceAdapter";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3001;
const CACHE_INTERVAL = 300;

const productsCache = new NodeCache({
    stdTTL: CACHE_INTERVAL,
    checkperiod: CACHE_INTERVAL,
});

const updateCache = async () => {
    console.log("Updating cache...");
    
    const products = await getProductsWithAvailabilities();
    return productsCache.set("products", products);
};

const cache = (): RequestHandler => {
    return async (req, res, next) => {
        const cachedBody = productsCache.get("products");

        if (cachedBody) {
            next();
        } else {
            await updateCache();
            console.log("Updated cache!");
            
            next();
        }
    };
};

app.get("/", (req, res) => {
    res.send("Hi! This is a caching server for warehouse-explorer.");
});

app.get("/products", cache(), (req, res) => {
    const cachedBody = productsCache.get("products");

    console.log("Sending response...");
    
    res.send(cachedBody);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
