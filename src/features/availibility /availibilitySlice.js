import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const availibilitySlice = createSlice({
  name: "availibility",
  initialState,
  reducers: {
    setInitialState(state, action) {
      return action.payload;
    },
    setItems(state, action) {
      return action.payload;
    },
  },
});

export const availibility = (state) => state.availibility;

export const { setItems, setInitialState } = availibilitySlice.actions;

export default availibilitySlice.reducer;
