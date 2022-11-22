import "./expertize.scss";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useState } from "react";
import { postData } from "../features/skills/postDataSkills";

function SkillsForm() {
  const dispatch = useDispatch();
  let [skillIsValid, setSkillIsValid] = useState(false);
  let [rangeIsValid, setRangeIsValid] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.skill) {
      errors.skill = "Skill name is a required field";
      setSkillIsValid(false);
    } else if (!/^[A-Za-z]+$/.test(values.skill)) {
      errors.skill = "Skill name must be a text type";
      setSkillIsValid(false);
    } else setSkillIsValid(true);
    if (!values.range) {
      errors.range = "Skill range is a required field";
      setRangeIsValid(false);
    } else if (!/^\d+$/.test(values.range)) {
      errors.range = "Skill range must be a number type";
      setRangeIsValid(false);
    } else if (Number(values.range) < 10) {
      errors.range = "Skill range must be greater than or equal to 10";
      setRangeIsValid(false);
    } else if (Number(values.range) > 100) {
      errors.range = "Skill range must be less than or equal to 100";
      setRangeIsValid(false);
    } else setRangeIsValid(true);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      skill: "",
      range: "",
    },
    validate,
    onSubmit: async () => {
      localStorage.setItem(formik.values.skill, formik.values.range);
      dispatch(postData(formik.values.skill, formik.values.range));
      formik.resetForm();
    },
  });
  return (
    <div className="expertize-form-holder">
      <form className="skills-form" onSubmit={formik.handleSubmit}>
        <div className="input-holder">
          <label htmlFor="skill">Skill name:</label>
          <input
            id="skill"
            type="text"
            name="skill"
            data-testid="input-skill"
            style={{
              borderColor: formik.errors.skill ? "red" : "black",
            }}
            placeholder="Enter skill name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skill}
          />
          {formik.touched.skill && formik.errors.skill ? (
            <div data-testid="div-skill">{formik.errors.skill}</div>
          ) : null}
        </div>
        <div className="input-holder">
          <label htmlFor="range">Skill range:</label>
          <input
            id="range"
            type="text"
            name="range"
            data-testid="input-range"
            style={{
              borderColor: formik.errors.range ? "red" : "black",
            }}
            placeholder="Enter skill range"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.range}
          />
          {formik.touched.range && formik.errors.range ? (
            <div data-testid="div-range">{formik.errors.range}</div>
          ) : null}
        </div>
        <Button
          class="button"
          text="Add skill"
          type="submit"
          style={{
            opacity: skillIsValid && rangeIsValid ? "1" : "0.6",
          }}
          disabled={!skillIsValid || !rangeIsValid}
        />
      </form>
    </div>
  );
}

export default SkillsForm;
