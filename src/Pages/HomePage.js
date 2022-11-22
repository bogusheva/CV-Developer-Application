import { Link, Redirect } from "react-router-dom";
import "./homePage.scss";
import Button from "../components/Button";
import Photobox from "../components/Photobox";

function HomePage() {
  return (
    <main className="main">
      <div className="main-holder">
        <Photobox
          name="John Doe"
          class="photobox-main"
          title="Programmer. Creative. Innovator"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
          avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
        <Link to="/inner">
          <Button
            class="button"
            text="Know more"
            onClick={() => <Redirect to="/inner" />}
          />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
