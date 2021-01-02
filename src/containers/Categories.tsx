import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "styles/categories.module.css";
import { CategoryApi } from "types/api";
import {
    selectAccessoriesProducts,
    selectJacketsProducts,
    selectProductsStatus,
    selectShirtsProducts,
} from "utils/store/selectors/productsSelectors";
import Products from "./Products";

const Categories = () => {
    const [category, setCategory] = useState<CategoryApi>("shirts");

    const shirtsProducts = useSelector(selectShirtsProducts);
    const jacketsProducts = useSelector(selectJacketsProducts);
    const accessoriesProducts = useSelector(selectAccessoriesProducts);
    const productsStatus = useSelector(selectProductsStatus);

    const isLoading = productsStatus !== "succeeded";

    const getProductsByCategory = () => {
        switch (category) {
            case "shirts":
                return shirtsProducts;
            case "jackets":
                return jacketsProducts;
            case "accessories":
                return accessoriesProducts;
        }
    };

    const handleCategoryChange = (category: CategoryApi) => {
        setCategory(category);
    };

    return (
        <>
            {isLoading ? (
                <div className={styles.loadingContainer}>Loading...</div>
            ) : (
                <Products products={getProductsByCategory()} />
            )}
            <div className={styles.categoriesButtonsWrapper}>
                <button onClick={() => handleCategoryChange("shirts")}>
                    Shirts
                </button>
                <button onClick={() => handleCategoryChange("jackets")}>
                    Jackets
                </button>
                <button onClick={() => handleCategoryChange("accessories")}>
                    Accessories
                </button>
            </div>
        </>
    );
};

export default Categories;
