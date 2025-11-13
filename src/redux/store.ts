import { configureStore } from "@reduxjs/toolkit";

import openReducer from "./slices/OpenSlices";
export const store = configureStore({
  reducer: {
    openReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
