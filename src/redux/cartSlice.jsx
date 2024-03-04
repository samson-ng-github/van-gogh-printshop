import { createSlice } from '@reduxjs/toolkit';
import cartData from '../data/cartData.json';

const initialState = {
  cartData: cartData,
  totalPrice: 0,
  isCartPanelOn: false,
};

const cartSlice = createSlice({
  name: 'cartPanel',
  initialState,
  reducers: {
    increaseCartItem: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartData.find((cartItem) => cartItem.id === id);
      cartItem.amount += 1;
    },
    decreaseCartItem: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartData.find((cartItem) => cartItem.id === id);
      cartItem.amount -= 1;
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cartData = state.cartData.filter((cartItem) => cartItem.id !== id);
    },
    calculateEach: (state) => {
      let dimensions = [];
      state.cartData.forEach((cartItem) => {
        dimensions = cartItem.size.split(' x ');
        cartItem.price = (
          (Number(dimensions[0]) * Number(dimensions[1])) /
          100
        ).toFixed(2);
      });
    },
    calculateTotal: (state) => {
      let totalPrice = 0;
      state.cartData.forEach((cartItem) => {
        totalPrice += cartItem.amount * Number(cartItem.price);
      });
      state.totalPrice = totalPrice.toFixed(2);
    },
    openCartPanel: (state) => {
      state.isCartPanelOn = true;
    },
    closeCartPanel: (state) => {
      state.isCartPanelOn = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
  calculateEach,
  calculateTotal,
  openCartPanel,
  closeCartPanel,
} = cartSlice.actions;
