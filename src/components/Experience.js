import "./experience.scss";

function Experience({ data, id }) {
  return (
    <section className="section-experience" id={id}>
      <h2>Experience</h2>
      <div className="experience-holder">
        {data.map((item, i) => (
          <div className="experience-each-holder" key={i}>
            <div className="experience-description-1">
              <div className="experience-description-company">
                {item.info.company}
              </div>
              <div className="experience-description-position">
                {item.info.job}
              </div>
            </div>
            <div className="experience-description-2">
              <div className="experience-description-period">{item.date}</div>
              <div className="experience-description-charge">
                {item.info.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
