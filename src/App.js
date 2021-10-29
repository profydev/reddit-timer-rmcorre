import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>App Placeholder</div>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/search">Search</Route>
        <Route>404 - Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
