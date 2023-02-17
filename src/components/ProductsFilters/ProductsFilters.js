import React, { useEffect } from "react";
import styles from "../../common/styles/Headers.module.scss";
import { useState } from "react";

function ProductsFilters({ products, setFilteredProducts }) {
  const [filterValue, setFilterValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foodOnly, setFoodOnly] = useState(false);

  const handleFilterInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleSelectedCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onlyFoodDisplay = (event) => {
    setFoodOnly(event.target.checked);
  };

  const resetFilters = () => {
    setFilterValue("");
    setSelectedCategory("");
    setFoodOnly(false);
  };

  const categories = products.map((product) => product.kategoria);
  const uniqueCategories = [...new Set(categories)];

  useEffect(() => {
    let filteredList = products.filter((product) =>
      product.nazwa.includes(filterValue.toLocaleLowerCase())
    );

    if (foodOnly) {
      console.log("1");
      filteredList = filteredList.filter(
        (product) => product.produktSpozywczy === true
      );
    }

    if (selectedCategory) {
      console.log("2");
      filteredList = filteredList.filter(
        (product) => product.kategoria === selectedCategory
      );
    }
    setFilteredProducts(filteredList);
  }, [filterValue, selectedCategory, foodOnly, products, setFilteredProducts]);
  return (
    <div className={styles.Wrapper}>
      <b><u>Products Filters:</u></b>
      <input value={filterValue} onChange={handleFilterInputChange}></input>
      <select value={selectedCategory} onChange={handleSelectedCategory}>
        <option key="all" value={""}>
          Wszystkie kategorie
        </option>
        {uniqueCategories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <b><u>Tylko artykuły spożywcze:</u></b>
      <input
        type="checkbox"
        onChange={onlyFoodDisplay}
        value={foodOnly}
        checked={foodOnly}
      ></input>
      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}

export default ProductsFilters;
