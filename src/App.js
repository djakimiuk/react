import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";
import { useState } from "react";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState(produkty);
  const handleAddItem = (index) => {
    setShoppingList(
      shoppingList.concat({ ...produkty[index], completion: false })
    );
    console.log(shoppingList);
  };
  const handleRemoveItem = (index) => {
    const arrCopy = [...shoppingList];
    arrCopy.splice(index, 1);
    setShoppingList(arrCopy);
  };
  const handleComplete = (index) => {
    const arrCopy = [...shoppingList];
    const product = { ...arrCopy[index] };
    product.completion = !product.completion;
    arrCopy[index] = product;
    setShoppingList(arrCopy);
  };
  return (
    <div className={styles.appWrapper}>
      <AddProducts products={produkty} />
      <ProductsFilters
        products={produkty}
        setFilteredProducts={setProductsToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          products={productsToDisplay}
          handleClick={handleAddItem}
        />
        <ShopingList
          shoppingProducts={shoppingList}
          handleLeftClick={handleRemoveItem}
          handleRightClick={handleComplete}
        />
      </div>
    </div>
  );
}

export default App;
