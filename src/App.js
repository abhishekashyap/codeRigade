import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact/>
        <Route path='/:id' exact/>
      </Switch>
    </Router>
  );
}

export default App;
