import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "styles/categories.module.css";
import { CategoryApi } from "types/api";
import {
    selectBeaniesProducts,
    selectFacemasksProducts,
    selectProductsStatus,
    selectGlovesProducts,
} from "utils/store/selectors/productsSelectors";
import Products from "./Products";

const Categories = () => {
    const [category, setCategory] = useState<CategoryApi>("gloves");

    const glovesProducts = useSelector(selectGlovesProducts);
    const facemasksProducts = useSelector(selectFacemasksProducts);
    const beaniesProducts = useSelector(selectBeaniesProducts);
    const productsStatus = useSelector(selectProductsStatus);

    const isLoading = productsStatus !== "succeeded";

    const getProductsByCategory = () => {
        switch (category) {
            case "gloves":
                return glovesProducts;
            case "facemasks":
                return facemasksProducts;
            case "beanies":
                return beaniesProducts;
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
                <button onClick={() => handleCategoryChange("gloves")}>
                    Gloves
                </button>
                <button onClick={() => handleCategoryChange("facemasks")}>
                    Facemasks
                </button>
                <button onClick={() => handleCategoryChange("beanies")}>
                    Beanies
                </button>
            </div>
        </>
    );
};

export default Categories;
