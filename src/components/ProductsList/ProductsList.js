import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component {
  
  render() {
    const { products, handleClick } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Products list</p>
          <ul>
            {products.map((product, index) => (
              <li key={index} onClick={() => handleClick(index)}>
                <label>{product.nazwa}</label> 
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default ProductsList;
