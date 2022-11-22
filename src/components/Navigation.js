import "./navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

function Navigation({ data, activeId }) {
  return (
    <ul className="navigation-list">
      {data.map((item, i) => (
        <li
          className={clsx(
            "navigation-item",
            item.id === activeId && "navigation-item-active"
          )}
          key={i}
        >
          <a href={`#${item.id}`} className="navigation-description">
            <FontAwesomeIcon className="icon-navigation" icon={item.icon} />
            <span className="navigation-description">{item.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
