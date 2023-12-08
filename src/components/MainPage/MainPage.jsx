import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "../../App.css";
import { useSelector } from "react-redux";

function useSelectedProductsCount(products, setSelectedProductsCount) {
  useEffect(() => {
    const selectedProductsCount = products.filter(
      (product) => product.selected
    ).length;
    setSelectedProductsCount(selectedProductsCount);
  }, [products, setSelectedProductsCount]);
}

function useLogging(data, dependencies) {
  useEffect(() => {
    dependencies.forEach((dependency, index) => {
      console.log(dependency, data[index]);
    });
  }, data);
}

function useExchangeRate(setExchangeRate) {
  useEffect(() => {
    const interval = setInterval(() => {
      setExchangeRate(40);
      console.log("The exchange rate has been changed to 40");
    }, 30000);
    return () => clearInterval(interval);
  }, [setExchangeRate]);
}

export default function MainPage() {
  const productsData = useSelector((state) => state.products);
  const [products, setProducts] = useState(productsData);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProductsCount, setSelectedProductsCount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(36.5);

  const handleProductSelect = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, selected: !product.selected }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const convertToUSD = (priceInUAH) => {
    return (priceInUAH / exchangeRate).toFixed(2);
  };

  useSelectedProductsCount(products, setSelectedProductsCount);

  useLogging(
    [products, isLoggedIn, selectedProductsCount],
    ["Products: ", "IsLoggedIn: ", "SelectedProductsCount: "]
  );

  useExchangeRate(setExchangeRate);

  return (
    <div className="container">
      <Header />
      <Menu
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <Body
        products={products}
        onProductSelect={handleProductSelect}
        selectedProductsCount={selectedProductsCount}
        convertToUSD={convertToUSD}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}