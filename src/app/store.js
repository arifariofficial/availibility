import { configureStore } from "@reduxjs/toolkit";
import availibilitySlice from "../features/availibility /availibilitySlice";
import availibilityFunctionSlice from "../features/availibilityFunction/availibilityFunctionSlice";

export const store = configureStore({
  reducer: {
    availibility: availibilitySlice,
    availibilityFunction: availibilityFunctionSlice,
  },
});
