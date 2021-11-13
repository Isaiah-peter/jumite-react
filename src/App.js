import React from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetListOfOrder from "./pages/GetListOfOrder";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="login">
          <Login />
        </Route>
        <Route path="/create-order">
          <Order />
        </Route>
        <Route path="/get-order">
          <GetListOfOrder />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
