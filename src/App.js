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
  const [products, setProducts] = useState(produkty);

  const handleAddItem = (index) => {
    setShoppingList(
      shoppingList.concat({ ...products[index], completion: false })
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
  const handleNewProduct = (productName, productCategory, foodProduct) => {
    const newProduct = {
      nazwa: productName,
      kategoria: productCategory,
      produktSpozywczy: foodProduct,
    };
    setProducts(products.concat(newProduct));
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts products={products} submitProduct={handleNewProduct} />
      <ProductsFilters
        products={products}
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
