import React from "react";
import styles from "styles/product.module.css";
import { ProductItemType } from "types/types";

interface Props {
    product: ProductItemType;
}

const Product = ({ product }: Props) => {
    return (
        <div className={styles.root}>
            <h5>{product.name}</h5>
            <p>Type: {product.type}</p>
            <p>Color: {product.color}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantityAvailable ?? "not available"}</p>
        </div>
    );
};

export default Product;
