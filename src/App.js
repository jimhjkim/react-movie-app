import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path={`${process.env.PUBLIC_URL}/movie/:id`} component={Detail} />
        <Route path={`${process.env.PUBLIC_URL}/`} component={Home} /> */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
