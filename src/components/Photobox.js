import "./photobox.scss";

function Photobox(props) {
  return (
    <div className={props.class}>
      <div className="photobox-img-holder">
        <img src={props.avatar} alt="frontend-developer"></img>
      </div>
      <h1>{props.name}</h1>
      {props.title && <h2 data-testid="h2">{props.title}</h2>}
      {props.description && (
        <div className="photobox-description" data-testid="description">
          {props.description}
        </div>
      )}
    </div>
  );
}

export default Photobox;
