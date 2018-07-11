import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Container>
    <Jumbotron />
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  </Container>
);

export default App;
