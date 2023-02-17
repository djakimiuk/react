
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList({ shoppingProducts, handleLeftClick, handleRightClick }) {

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>
          {shoppingProducts.map((product, index) => (
            <li
              key={index}
              onClick={() => {
                handleLeftClick(index);
              }}
              onContextMenu={(e) => {
                handleRightClick(index);
                e.preventDefault();
              }}
            >
              <label
                style={{
                  textDecoration: `${
                    product.completion ? "line-through" : "auto"
                  }`,
                }}
              >
                {product.nazwa}
              </label>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
