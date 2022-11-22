import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  status: "loading",
  skillsIsOpen: false,
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    changeVisibility(state) {
      return {
        ...state,
        skillsIsOpen: !state.skillsIsOpen,
      };
    },
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
    addStorage(state, action) {
      state.skills.push(...action.payload);
    },
    addSkills(state, action) {
      state.skills.push(action.payload);
    },
  },
});

export const {
  changeVisibility,
  fulfilledData,
  errorData,
  addStorage,
  addSkills,
} = skillsSlice.actions;

export default skillsSlice.reducer;
