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
    updateTime(state, action) {
      return state.map((item) =>
        item.item1Id === action.payload
          ? { ...item, weekDisable: !item.weekDisable }
          : item
      );
    },
  },
});

export const availibilityFunction = (state) => state.availibilityFunction;

export const { setTime, deleteTime, updateTime } =
  availibilityFunctionSlice.actions;

export default availibilityFunctionSlice.reducer;
