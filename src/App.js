import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

import Login from "./components/Login/Login";
import Codebox from "./components/Codebox/Codebox";

function App() {
  return (
    <Router>
      <ReactNotification />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/:id" component={Codebox} exact />
      </Switch>
    </Router>
  );
}

export default App;
