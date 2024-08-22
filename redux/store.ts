import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../redux/cartSlice"





// Create the store with the persisted reducer
export const store = configureStore({
  reducer: {
    cart: cartreducer
  },
});



export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
