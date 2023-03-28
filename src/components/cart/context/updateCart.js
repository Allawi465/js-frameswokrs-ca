export function updateProduct( dispatch, id, num ) {
    dispatch({
        type: "updateProduct",
        payload: {
            id,
            quantity: num,
        },
    });
}

export default updateProduct;