import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Users from './pages/users/Users';

// import createRoutes from './routes';
// const routes = createRoutes();

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/">
              <Users />
            </Route>
            <Route path="/Users">
              <Users />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
