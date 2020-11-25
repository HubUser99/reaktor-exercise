import React, { useState } from "react";
import styles from "styles/categories.module.css";
import { CategoryApi } from "types/api";
import { ProductsType } from "types/types";
import Products from "./Products";

interface Props {
    shirts: ProductsType;
    jackets: ProductsType;
    accessories: ProductsType;
}

const Categories = ({ shirts, jackets, accessories }: Props) => {
    const [category, setCategory] = useState<CategoryApi>("shirts");

    const getProductsByCategory = () => {
        switch (category) {
            case "shirts":
                return shirts;
            case "jackets":
                return jackets;
            case "accessories":
                return accessories;
        }
    };

    const handleCategoryChange = (category: CategoryApi) => {
        setCategory(category);
    };

    return (
        <>
            <Products products={getProductsByCategory()} />
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
