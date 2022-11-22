import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "../features/skills/skillsSlice";
import educationSlice from "../features/education/educationSlice";

export const store = configureStore({
  reducer: {
    educations: educationSlice,
    skills: skillsSlice,
  },
});
