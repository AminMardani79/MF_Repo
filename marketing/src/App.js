import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
