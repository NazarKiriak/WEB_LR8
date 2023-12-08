import React, { useContext, createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsPage from "../ProductsPage/ProductsPage";
import { useSelector } from "react-redux";

function ProductInfo() {
  const [data, setData] = useState();
  const { idx } = useParams();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products && idx >= 0 && idx < products.length) {
      const product = products[idx];
      setData({
        id: product[Object.keys(product)[0]],
        name: product[Object.keys(product)[1]],
        description:
          "Discover the incredible world of this product, filled with innovative technology, stunning design, and unmatched performance. Dive into a rich experience that will exceed your expectations! Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo saepe assumenda harum libero magni quod illum quis perspiciatis explicabo nesciunt aliquam, nemo recusandae magnam, sed debitis ipsum itaque possimus!",
      });
    }
  }, [products, idx]);

  return <ProductsPage product={data} />;
}

export default ProductInfo;
