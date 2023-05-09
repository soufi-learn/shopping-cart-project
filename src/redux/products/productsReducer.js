const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: ''
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
