import { save } from '../../../utils/localStorage';

export function addProduct(state, dispatch, id, title, price, discountedPrice, image, num) {
  dispatch({
    type: "addProduct",
    payload: {
      id,
      title,
      price,
      discountedPrice,
      image,
      quantity: num,
    },
  });

  const getImgUrl = state.cart.map((product) => ({
    ...product,
    image: product.image.url,
  }));

  save("cart", { ...state, cart: getImgUrl });
}
