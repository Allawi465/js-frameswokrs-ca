function RemoveProduct(dispatch, id) {
  dispatch({
    type: "removeProduct",
    payload: {
      id,
    },
  });
}

export default RemoveProduct;