import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import { routes } from "./constants/generalConstants";
import Dashboard from "./features/dashboard";

const AppRouter = () => {
  return (    
      <Router>
        <Route exact path={routes.login} component={Login} />
        <Route path={routes.register} component={Signup} />
        <Route path={routes.dashboard} component={Dashboard} />
      </Router>    
  );
};

export default AppRouter;
