import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educations: [],
  status: "loading",
};

const educationSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {
    fulfilledData(state) {
      return {
        ...state,
        status: "fulfilled",
      };
    },
    errorData(state) {
      return {
        ...state,
        status: "error",
      };
    },
    educationFetch(state, action) {
      return { ...state, educations: [...action.payload] };
    },
  },
});

export const { educationFetch, fulfilledData, errorData } =
  educationSlice.actions;

export default educationSlice.reducer;
