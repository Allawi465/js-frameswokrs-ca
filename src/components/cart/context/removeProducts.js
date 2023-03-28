export function removeProduct( dispatch, id) {
    dispatch({
      type: "removeProduct",
      payload: {
        id,
      },
    });
  }
  
  export default removeProduct;