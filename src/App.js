import React, { Component } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Queen from "./queenComponents/queen";
class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // console.log(window.innerHeight,"  ",window.innerWidth);
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/pathfinder" component={Pathfinder} />
          <Route path="/prime" component={Seive} />
          <Route path="/sort" component={Sort} />
          <Route path="/recursivesort" component={RecursiveSort} />
          <Route path="/nqueen" component={Queen} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
