import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../common/header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/search">Search</Route>
        <Route>404 - Not Found</Route>
      </Switch>
    </>
  );
}

export default App;
