import React, { useEffect, useState } from "react";
import styles from "styles/app.module.css";
import Categories from "containers/Categories";
import { ProductsType } from "types/types";
import {
    getAvailabilitiesForProducts,
    getProductsWithAvailabilities,
    getProductsWithEmptyAvailabilities,
} from "utils/api/ApiInterfaceAdapter";
import { sleep } from "utils/common/common";

const App = () => {
    const [firstCall, setFirstCall] = useState(true);
    const [shirtsProducts, setShirtsProducts] = useState<ProductsType>([]);
    const [jacketsProducts, setJacketsProducts] = useState<ProductsType>([]);
    const [
        accessoriesProducts,
        setAccessoriesProducts,
    ] = useState<ProductsType>([]);

    const handleFetchProducts = async () => {
        const shirtsProducts = await getProductsWithEmptyAvailabilities(
            "shirts"
        );
        setShirtsProducts(shirtsProducts);

        setFirstCall(true);

        const jacketsProducts = await getProductsWithEmptyAvailabilities(
            "jackets"
        );
        setJacketsProducts(jacketsProducts);

        const accessoriesProducts = await getProductsWithEmptyAvailabilities(
            "accessories"
        );
        setAccessoriesProducts(accessoriesProducts);
    };

    const handleFetchAvailabilities = async () => {
        const availabilities = await getAvailabilitiesForProducts([
            ...shirtsProducts,
            ...jacketsProducts,
            ...accessoriesProducts,
        ]);

        const shirtsProductsWithAvailabilities = getProductsWithAvailabilities(
            shirtsProducts,
            availabilities
        );
        setShirtsProducts(shirtsProductsWithAvailabilities);

        const jacketsProductsWithAvailabilities = getProductsWithAvailabilities(
            jacketsProducts,
            availabilities
        );
        setJacketsProducts(jacketsProductsWithAvailabilities);

        const accessoriesProductsWithAvailabilities = getProductsWithAvailabilities(
            accessoriesProducts,
            availabilities
        );
        setAccessoriesProducts(accessoriesProductsWithAvailabilities);
    };

    useEffect(() => {
        handleFetchProducts();
        setInterval(handleFetchProducts, 300000);
    }, []);

    useEffect(() => {
        if (
            firstCall &&
            shirtsProducts.length > 0 &&
            jacketsProducts.length > 0 &&
            accessoriesProducts.length > 0
        ) {
            handleFetchAvailabilities();
            setFirstCall(false);
        }
    }, [shirtsProducts, jacketsProducts, accessoriesProducts]);

    return (
        <div className={styles.root}>
            <Categories
                shirts={shirtsProducts}
                jackets={jacketsProducts}
                accessories={accessoriesProducts}
            />
        </div>
    );
};

export default App;
