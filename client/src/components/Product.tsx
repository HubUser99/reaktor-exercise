import styles from "styles/product.module.css";
import { ProductItemType } from "types/types";

interface Props {
    product: ProductItemType;
}

const Product = ({ product }: Props) => {
    const getStyleForQuantity = () => {
        switch(product.quantityAvailable) {
            case "LESSTHAN10":
                return styles.lessThanTen;
            case "OUTOFSTOCK":
                return styles.outOfStock;
            case "not available":
                return styles.outOfStock;
            default:
                return "";
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.title}>{product.name}</div>
            <div className={styles.property}>
               <div className={styles.type}>Type</div>
               <div>{product.type}</div>
            </div>
            <div className={styles.property}>
               <div className={styles.manufacturer}>Manufacturer</div>
               <div>{product.manufacturer}</div>
            </div>
            <div className={styles.property}>
               <div className={styles.price}>Price</div>
               <div>{product.price}</div>
            </div>
            <div className={styles.property}>
               <div className={styles.quantity}>Quantity</div>
               <div className={getStyleForQuantity()}>{product.quantityAvailable}</div>
            </div>
        </div>
    );
};

export default Product;
