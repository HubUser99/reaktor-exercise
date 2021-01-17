import styles from "styles/app.module.css";
import Categories from "containers/Categories";

const App = () => {
    return (
        <div className={styles.root}>
            <Categories />
        </div>
    );
};

export default App;
