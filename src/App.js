import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import InnerPage from "./Pages/InnerPage";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/inner">
          <InnerPage />
        </Route>
        <Route path="/">
          <div>
            <HomePage />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
