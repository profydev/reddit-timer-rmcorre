import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>App Placeholder</div>
      <Switch>
        <Route path="/search" />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
