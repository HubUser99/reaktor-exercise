import React, { useEffect, useState } from "react";
import Products from "containers/Products";
import { ProductsType } from "types/types";
import { getProductsWithAvailabilities } from "utils/api/ApiInterfaceAdapter";

const App = () => {
    const [products, setProducts] = useState<ProductsType>([]);

    const handleFetchProducts = async () => {
        const products = await getProductsWithAvailabilities("jackets");
        setProducts(products);
    };

    useEffect(() => {
        handleFetchProducts();
    }, []);

    return (
        <div className="App">
            <Products products={products} />
        </div>
    );
};

export default App;
