import Product from "components/Product";
import React, { useState } from "react";
import styles from "styles/products.module.css";
import { ProductsType } from "types/types";
import { getChunks } from "utils/common/common";

interface Props {
    products: ProductsType;
}

const CHUNK_SIZE = 50;

const Products = ({ products }: Props) => {
    const getProductsChunks = () => getChunks(products, CHUNK_SIZE);
    const [lastChunkIndex, setLastChunkIndex] = useState(1);

    window.onscroll = (event: Event) => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setLastChunkIndex((prevState) => prevState + 1);
        }
    };

    return (
        <div className={styles.productsWrapper}>
            {getProductsChunks()
                .slice(0, lastChunkIndex)
                .map((chunk) =>
                    chunk.map((product) => (
                        <Product product={product} key={product.id} />
                    ))
                )}
        </div>
    );
};

export default Products;
