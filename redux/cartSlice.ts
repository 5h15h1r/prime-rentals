import { Item } from "@/app/Utils/CardsList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  item: Item;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;
