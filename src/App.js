import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";

import "./App.css";
import ShopPage from "./pages/shop/shop.page";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
