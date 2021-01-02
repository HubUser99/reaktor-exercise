import React, { useEffect } from "react";
import styles from "styles/app.module.css";
import Categories from "containers/Categories";
import { useDispatch } from "react-redux";
import { fetchProducts } from "utils/store/slices/productsSlice";

const App = () => {
    const dispatch = useDispatch();

    const handleFetchProducts = () => {
        dispatch(fetchProducts());
    };

    useEffect(() => {
        setInterval(handleFetchProducts, 300000);
    }, []);

    return (
        <div className={styles.root}>
            <Categories />
        </div>
    );
};

export default App;
