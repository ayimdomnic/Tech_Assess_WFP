import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from "./App";

const AppRouter = () => {
   return (
        <Router>
            <Switch>
              <Route exact path="/" component={App}/>
            </Switch>
        </Router>
   );
};

export default AppRouter