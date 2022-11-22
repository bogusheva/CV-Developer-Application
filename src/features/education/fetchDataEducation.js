import { educationFetch, errorData, fulfilledData } from "./educationSlice";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("api/educations");
      const data = await response.json();
      dispatch(educationFetch(data));
      dispatch(fulfilledData());
    } catch {
      dispatch(errorData());
    }
  };
};
