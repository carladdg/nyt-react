import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <React.Fragment>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  </Router>
);

export default App;
