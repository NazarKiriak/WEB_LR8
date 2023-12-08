import React, { useContext, useState } from "react";
import styles from "./Body.module.css";
import ProductInfoButton from "../ProductInfoButton/ProductInfoButton";
import { CSSTransition } from "react-transition-group";
import AddProductForm from "../AddProductForm/AddProductForm";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { addProduct, deleteProduct, sortProductsByName } from "../../actions";
import { Popover, message } from "antd";

const Body = ({
  products,
  onProductSelect,
  selectedProductsCount,
  convertToUSD,
  setProducts,
}) => {
  const [showInUSD, setShowInUSD] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const getSelectedProducts = () => {
    return products.filter((product) => product.selected);
  };

  const convertUSD = (priceInUAH) => {
    if (convertToUSD) {
      return convertToUSD(priceInUAH);
    }
    return priceInUAH;
  };

  const toggleCurrencyDisplay = () => {
    setShowInUSD((prevShowInUSD) => !prevShowInUSD);
  };

  const selectedProducts = getSelectedProducts();
  const selectedProductsNames = selectedProducts.map((product) => product.name);

  const currencyButtonText = showInUSD ? "Ціна в гривнях" : "Ціна в доларах";

  const dispatch = useDispatch();

  console.log(store);

  const handleAddProduct = (values, { resetForm }) => {
    const newProduct = {
      id: products,
      name: values.name,
      price: parseFloat(values.price),
      selected: false,
    };
    dispatch(addProduct(newProduct));
    message.success(`Продукт ${newProduct.name} успішно додано!`);
    console.log(store);

    resetForm();
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    message.success(`Продукт ${productId.name} видалено успішно!`);
  };

  const handleSortProductsByName = () => {
    dispatch(sortProductsByName());
    message.success(`Сортування продуктів виконано успішно!`);
  };

  return (
    <div className={styles.body}>
      <h2>Тіло</h2>
      <h2>Список товарів</h2>
      <div className={styles.goods}>
        <ol>
          {products.map((product, idx) => (
            <>
              <li key={product.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={product.selected}
                    onChange={() => onProductSelect(product.id)}
                  />
                  {product.name}, ціна:{" "}
                  {showInUSD
                    ? convertUSD(product.price) + " USD"
                    : product.price + " грн"}{" "}
                  /кг.
                </label>
                <span className={styles.bodyContent}>
                  <ProductInfoButton
                    idx={idx}
                    name={product.name}
                  ></ProductInfoButton>
                  <Popover
                    title="Information"
                    content={"Видалити продукт " + product.name + "?"}
                  >
                    <img
                      className={styles.delete}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/800px-Cross_red_circle.svg.png"
                      alt="Delete product"
                      onClick={() => handleDeleteProduct(product)}
                    />
                  </Popover>
                </span>
              </li>
            </>
          ))}
        </ol>
      </div>

      <div className={styles.selected_products}>
        <h2>
          Вибрані товари: <span>{selectedProductsNames.join(", ")}</span>
        </h2>
        <h2>
          Кількість обраних товарів: <span>{selectedProductsCount}</span>
        </h2>
      </div>
      <div className={styles.productInfo_currency}>
        <button onClick={toggleCurrencyDisplay}>{currencyButtonText}</button>
        <button onClick={handleSortProductsByName}>Сортувати за алфавітом</button>
      </div>
      <div className={styles.dialog_gallery}>
        <button onClick={openDialog}>Додати новий товар</button>
        <CSSTransition
          in={isDialogOpen}
          timeout={500}
          classNames={styles.dialog}
          unmountOnExit
          mountOnEnter
        >
          <div className={styles.dialog}>
            <h2>Додати товар</h2>
            <AddProductForm handleSubmit={handleAddProduct} />
            <button onClick={closeDialog}>Закрити</button>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Body;
