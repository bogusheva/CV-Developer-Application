import "./box.scss";

function Box(props) {
  return (
    <section className="section-about" id={props.id}>
      <h2>{props.title}</h2>
      <div>{props.content}</div>
    </section>
  );
}

export default Box;
