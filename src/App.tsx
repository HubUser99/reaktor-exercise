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
        const products = await getProductsWithAvailabilities();

        setShirtsProducts(products.shirts);
        setJacketsProducts(products.jackets);
        setAccessoriesProducts(products.accessories);
    };

    useEffect(() => {
        handleFetchProducts();
        setInterval(handleFetchProducts, 10000);
    }, []);

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
