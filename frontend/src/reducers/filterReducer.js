export const filterReducer = (state = { products: [{}] }, action) => {
  switch (action.type) {
    case "FILTER_LIST_REQUEST":
      return { loading: true, ...state };
    case "FILTER_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "FILTER_LIST_FAIL":
      return { loading: false, products: action.error };
    default:
      return state;
  }
};
