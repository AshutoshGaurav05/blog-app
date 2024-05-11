import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
