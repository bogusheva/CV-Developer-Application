import "./feedback.scss";

function Feedback({ data, id }) {
  return (
    <section className="section-feedbacks" id={id}>
      <h2>Feedbacks</h2>
      <div className="feedbacks-holder">
        {data.map((item, i) => (
          <div className="feedback-each-holder" key={i}>
            <div className="feedback-description">{item.feedback}</div>
            <div className="feedback-data">
              <div className="feedback-author-img-holder">
                <img src={item.reporter.photoUrl} alt="feedback-author" />
              </div>
              <div className="feedback-author-info">
                {item.reporter.name},
                <a className="feedback-site-url" href={item.reporter.citeUrl}>
                  {item.reporter.citeUrl.slice(12)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
