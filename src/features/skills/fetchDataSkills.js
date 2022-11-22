import { errorData, fulfilledData, addStorage } from "./skillsSlice";

export const fetchDataSkills = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("api/skills");
      const data = await response.json();
      dispatch(addStorage(data));
      dispatch(fulfilledData());
    } catch {
      dispatch(errorData());
    }
  };
};
