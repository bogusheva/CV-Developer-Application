import { Link, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Photobox from "../components/Photobox";
import Button from "../components/Button";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Panel({ data, activeId }) {
  return (
    <div className="general-panel">
      <Photobox
        name="John Doe"
        class="photobox-main photobox-panel"
        avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
      <Navigation data={data} activeId={activeId} />
      <Link to="/" data-testid="click-go-back">
        <Button
          class="button back-button"
          icon={faChevronLeft}
          text="Go back"
          onClick={() => <Redirect to="/" />}
        />
      </Link>
    </div>
  );
}

export default Panel;
