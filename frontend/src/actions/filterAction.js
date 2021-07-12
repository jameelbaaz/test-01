export const filterMaterial = (mat) => async (dispatch) => {
  // const product = products.find((product) => product._id === id);
  const productLocal = localStorage.getItem("products");
  let productParse = JSON.parse(productLocal);
  const productMat = productParse.filter((product) => product.material === mat);
  // console.log(productMat);

  try {
    dispatch({ type: "FILTER_LIST_REQUEST" });
    dispatch({ type: "FILTER_LIST_SUCCESS", payload: productMat });
  } catch (error) {
    dispatch({ type: "FILTER_LIST_FAIL", payload: error.response });
  }
};
