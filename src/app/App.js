import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import Header from '../common/header';
import Footer from '../common/footer';
import HomePage from '../page-home';
import SearchPage from '../page-search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search/:subreddit">
          <SearchPage />
        </Route>
        <Route path="/terms">Terms & Privacy Page</Route>
        <Route>404 - Not Found</Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
