import express from "express";
import NodeCache from "node-cache";
import dotenv from "dotenv";
import cors from "cors";
import { cacheMiddleware } from "middleware/cacheMiddleware";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3001;
const CACHE_INTERVAL = 300;

const productsCache = new NodeCache({
    stdTTL: CACHE_INTERVAL,
    checkperiod: CACHE_INTERVAL,
});

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hi! This is a caching server for warehouse-explorer.");
});

app.get("/products", cacheMiddleware(productsCache), (req, res) => {
    const cachedBody = productsCache.get("products");

    console.log("Sending response...");
    
    res.send(cachedBody);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
