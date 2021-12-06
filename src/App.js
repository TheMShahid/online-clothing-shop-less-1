import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
