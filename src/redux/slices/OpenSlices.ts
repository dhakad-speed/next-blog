import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type DrawerName = "profile" | "sideBar";
interface DrawerState {
  drawers: Record<DrawerName, boolean>;
}

const initialState: DrawerState = {
  drawers: {
    profile: false,
    sideBar: true,
  },
};
const openSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawer: (state, action: PayloadAction<DrawerName>) => {
      state.drawers[action.payload] = !state.drawers[action.payload];
    },
  },
});

const openReducer = openSlice.reducer;
export const { setDrawer } = openSlice.actions;
export default openReducer;
