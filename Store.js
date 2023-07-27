import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";

const Store = configureStore({
  reducer: { ui : uiSlice.reducer},
});

export default Store;
