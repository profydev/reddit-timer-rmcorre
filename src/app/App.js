import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import Header from '../common/header';
import Hero from '../hero/Hero';
import Info from '../info';
import Footer from '../common/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Info />
      </main>
      <Footer />
      <Switch>
        <Route exact path="/">
          Home Page
        </Route>
        <Route path="/search">Search Page</Route>
        <Route path="/terms">Terms & Privacy Page</Route>
        <Route>404 - Not Found</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
