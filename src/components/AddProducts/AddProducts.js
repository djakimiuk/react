import React from "react";
import styles from "../../common/styles/Headers.module.scss";

function AddProducts({products}) {
    
  return (
    <div className={styles.Wrapper}>
      <b><u>Add products:</u></b>
      <input></input>
      <b><u>Kategoria:</u></b>
      <input></input>
      <label><b><u>Artykuł spożywczy:</u></b></label>
      <input type="checkbox"></input>
      <button onClick={true}>Dodaj produkt</button>
    </div>
  );
}

export default AddProducts;
