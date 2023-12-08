export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: "DELETE_PRODUCT",
  payload: productId,
});

export const setProduct = (products) => ({
  type: "SET_PRODUCT",
  payload: products,
});

export const sortProductsByName = () => ({
  type: "SORT_PRODUCTS_BY_NAME",
});