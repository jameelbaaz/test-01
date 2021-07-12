export const addToCart = (id, qty) => async (dispatch, getState) => {
  // const product = products.find((product) => product._id === id);
  const productLocal = localStorage.getItem("products");
  let productParse = JSON.parse(productLocal);
  // console.log(productParse);
  const product = productParse.find((product) => product._id === id);
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock,
      material: product.material,
      createdAt: product.createdAt,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
