import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { useState } from "react";

function AddProducts({ submitProduct }) {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [foodProduct, setFoodProduct] = useState(false);

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCategory = (event) => {
    setProductCategory(event.target.value);
  };

  const handleFoodProduct = (event) => {
    setFoodProduct(event.target.checked);
  };

  const handleClick = () => {
    setProductName("");
    setProductCategory("");
    setFoodProduct(false);
    submitProduct(productName, productCategory, foodProduct);
  };

  return (
    <div className={styles.Wrapper}>
      <b>
        <u>Add products:</u>
      </b>
      <input value={productName} onChange={handleProductName}></input>
      <b>
        <u>Kategoria:</u>
      </b>
      <input value={productCategory} onChange={handleProductCategory}></input>
      <label>
        <b>
          <u>Artykuł spożywczy:</u>
        </b>
      </label>
      <input
        type="checkbox"
        value={foodProduct}
        checked={foodProduct}
        onChange={handleFoodProduct}
      ></input>
      <button onClick={handleClick} disabled={!productName || !productCategory}>
        Dodaj produkt
      </button>
    </div>
  );
}

export default AddProducts;
