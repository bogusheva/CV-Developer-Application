import "./innerPage.scss";
import Box from "../components/Box";
import Button from "../components/Button";
import BurgerPanel from "../components/BurgerPanel";
import Address from "../components/Address";
import Panel from "../components/Panel";
import Feedback from "../components/Feedback";
import Experience from "../components/Experience";
import Timeline from "../components/Timeline";
import Expertize from "../components/Expertize";
import Portfolio from "../components/Portfolio";
import { useState, useEffect } from "react";
import useScrollspy from "../functions/scrollSpy";
import {
  someText,
  dataFeedbacks,
  dataExperience,
  ids,
  dataNavigation,
} from "../components/dataComponents";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/education/fetchDataEducation";
import { fetchDataSkills } from "../features/skills/fetchDataSkills";

function MainContent() {
  const dispatch = useDispatch();
  let statusTimeline = useSelector((state) => state.educations.status);
  const educations = useSelector((state) => state.educations.educations);
  let skills = useSelector((state) => state.skills.skills);
  let statusSkills = useSelector((state) => state.skills.status);
  const skillsIsOpen = useSelector((state) => state.skills.skillsIsOpen);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDataSkills());
  }, [dispatch]);

  return (
    <div className="main-content-holder">
      <Box title="About" content={someText} id={ids[0]} />
      <Timeline status={statusTimeline} data={educations} id={ids[1]} />
      <Experience data={dataExperience} id={ids[2]} />
      <Expertize
        status={statusSkills}
        data={skills}
        skillsIsOpen={skillsIsOpen}
        id={ids[3]}
      />
      <Portfolio id={ids[4]} />
      <Address id={ids[5]} />
      <Feedback data={dataFeedbacks} id={ids[6]} />
      <Button
        class="button back-button-small"
        icon={faChevronUp}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      />
    </div>
  );
}

function InnerPage() {
  const [checked, setChecked] = useState(false);
  const activeId = useScrollspy(ids, 40);
  return (
    <div className="body-container">
      <div className="panel-holder">
        {checked ? null : <Panel data={dataNavigation} activeId={activeId} />}
        <BurgerPanel onClick={() => setChecked(!checked)} />
      </div>
      <main
        className={checked ? "main-content checked-navigation" : "main-content"}
      >
        <MainContent />
      </main>
    </div>
  );
}

export default InnerPage;
