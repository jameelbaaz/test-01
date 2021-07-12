import axios from "axios";

export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("/api/robots/");
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data.data });
  } catch (error) {
    dispatch({ type: "PRODUCT_LIST_FAIL", payload: error.response });
  }

  localStorage.setItem(
    "products",
    JSON.stringify(getState().productList.products)
  );
};

export const listProductsdetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAILS_FAIL", payload: error.response });
  }
};
