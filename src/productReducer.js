const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("Стан до додавання товару:", state);
      console.log("Вхідні дані для додавання товару:", action.payload);

      const newStateAfterAdd = {
        ...state,
        products: [...state.products, action.payload],
      };

      console.log("Стан після додавання товару:", newStateAfterAdd);

      return newStateAfterAdd;
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((item) => item !== action.payload),
      };
    case "SET_PRODUCT":
      return { ...state, products: action.payload };
    case "SORT_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: state.products
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name)),
      };
    default:
      return state;
  }
};

export default productReducer;
