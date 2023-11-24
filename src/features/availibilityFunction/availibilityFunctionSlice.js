import { createSlice } from "@reduxjs/toolkit";

const availibilityFunctionSlice = createSlice({
  name: "availibilityFunction",
  initialState: [],
  reducers: {
    setTime(state, action) {
      if (state.find((item) => item.id === action.payload.id)) {
        state.map((item) =>
          item.id === action.payload.id
            ? (item.time = action.payload.time)
            : item
        );
      } else {
        state.push(action.payload);
      }
    },
    deleteTime(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const availibilityFunction = (state) => state.availibilityFunction;

export const { setTime, deleteTime } = availibilityFunctionSlice.actions;

export default availibilityFunctionSlice.reducer;
