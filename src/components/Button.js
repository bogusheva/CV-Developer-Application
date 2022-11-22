import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
  return (
    <button
      className={props.class}
      type={props.type}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
      data-testid="button-test"
    >
      {props.icon && (
        <FontAwesomeIcon
          className="icon-contacts"
          data-testid="icon"
          icon={props.icon}
        />
      )}
      <span className="button-text">{props.text}</span>
    </button>
  );
}

export default Button;
