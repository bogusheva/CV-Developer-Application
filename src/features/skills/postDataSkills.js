import { addSkills } from "./skillsSlice";

export const postData = (skillData, rangeData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("api/skills", {
        method: "POST",
        body: JSON.stringify({ skill: skillData, range: rangeData }),
      });
      const data = await response.json();
      dispatch(addSkills(data));
    } catch (e) {
      throw new Error("Problems with server connection!");
    }
  };
};
