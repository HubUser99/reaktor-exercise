import Product from "components/Product";
import React from "react";
import styles from "styles/products.module.css";
import { ProductsType } from "types/types";

interface Props {
    products: ProductsType;
}

const Products = ({ products }: Props) => {
    return (
        <div className={styles.productsWrapper}>
            {products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    );
};

export default Products;
