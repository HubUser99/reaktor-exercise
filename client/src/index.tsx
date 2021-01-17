import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "utils/store/store";
import { fetchProducts } from "utils/store/slices/productsSlice";
import { getCacheInterval } from "utils/common/environment";

const CACHE_INTERVAL_MS = getCacheInterval(300);

store.dispatch(fetchProducts());

const handleFetchProducts = () => {
    store.dispatch(fetchProducts());
};

setInterval(handleFetchProducts, CACHE_INTERVAL_MS);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
