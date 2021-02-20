
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './home-page';
import Navbar from './Navbar/Navbar';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Navbar />
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
