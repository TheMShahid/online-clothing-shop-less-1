import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HEDDIN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEMS,
  payload: item,
});
