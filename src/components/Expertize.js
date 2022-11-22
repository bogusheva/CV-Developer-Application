import "./expertize.scss";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import SkillsForm from "./SkillsForm";
import { changeVisibility } from "../features/skills/skillsSlice";
import { faPen, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Expertize({ status, data, skillsIsOpen, id }) {
  const dispatch = useDispatch();
  const titleHolder = (
    <div className="title-block-holder">
      <h2>Skills</h2>
      <Button
        class="button"
        icon={faPen}
        text={skillsIsOpen ? "Close edit" : "Open edit"}
        onClick={() => dispatch(changeVisibility())}
      />
    </div>
  );
  const skillsHolder =
    status === "loading" ? (
      <div className="expertize-holder section-alternate">
        <FontAwesomeIcon
          className="icon-contacts"
          data-testid="icon-expertize"
          icon={faHourglass}
        />
      </div>
    ) : status === "error" ? (
      <div className="expertize-holder section-alternate">
        <p>Something went wrong: please review your server connection!</p>
      </div>
    ) : (
      <div className="expertize-holder">
        {data.map((item, i) => (
          <div
            className="expertize-each-holder"
            key={i}
            style={{ width: `${item.range}%` }}
          >
            {item.skill}
          </div>
        ))}
      </div>
    );

  const expertizeLine = (
    <div className="expertize-percent-line">
      <div className="expertize-percent-beginner"></div>
      <div className="expertize-percent-proficient"></div>
      <div className="expertize-percent-expert"></div>
    </div>
  );

  return (
    <section className="section-expertize" id={id}>
      {titleHolder}
      <div className="expertize-presentation">
        {skillsIsOpen ? <SkillsForm /> : null}
        {skillsHolder}
        {expertizeLine}
      </div>
    </section>
  );
}

export default Expertize;
