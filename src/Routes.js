import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Beers from './Pages/Beers';
import Cart from './Pages/Cart';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/beerlist" component={Beers} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
