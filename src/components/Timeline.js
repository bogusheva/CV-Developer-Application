import "./timeline.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";

function Timeline({ status, data, id }) {
  const timeline = data.map((item, i) => (
    <div className="education-each-holder" key={i}>
      <div className="education-period">{item.date}</div>
      <div className="education-description">
        <div className="education-timeline"></div>
        <div className="block-chevron"></div>
        <div>
          <div className="education-title">{item.title}</div>
          <div className="education-description-text">{item.text}</div>
        </div>
      </div>
    </div>
  ));
  const timelineBlock =
    status === "loading" ? (
      <div className="education-holder section-alternate">
        <FontAwesomeIcon
          className="icon-contacts"
          data-testid="icon-contacts"
          icon={faHourglass}
        />
      </div>
    ) : status === "fulfilled" ? (
      <div className="education-holder" data-testid="education-holder">
        {timeline}
      </div>
    ) : (
      <div className="education-holder section-alternate">
        <p>Something went wrong: please review your server connection!</p>
      </div>
    );
  return (
    <section className="section-education" id={id}>
      <h2>Education</h2>
      {timelineBlock}
    </section>
  );
}

export default Timeline;
