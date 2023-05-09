import axios from "axios";

const fetchproductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};
const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchproductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductsFailure(errorMessage));
      });
  };
};
