import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/Login/Login'
import Codebox from "./components/Codebox/Codebox";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/:id' component={Codebox} exact/>
      </Switch>
    </Router>
  );
}

export default App;
