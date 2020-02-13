import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Users from './pages/users/Users';

const createRoutes = () => (
  <Router>
      <Switch>
        <Route path="/Users">
          <Users />
        </Route>
      </Switch>
  </Router>
);

export default createRoutes;
