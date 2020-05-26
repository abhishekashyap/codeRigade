import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/:id' exact/>
      </Switch>
    </Router>
  );
}

export default App;
