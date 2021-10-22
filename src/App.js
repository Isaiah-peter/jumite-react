import React from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create-order">
          <Order />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
