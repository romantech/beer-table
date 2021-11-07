import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import BeerList from './Pages/BeerList';
import CartList from './Pages/CartList';
import { getBeerListRequest } from './Modules/beerList';

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeerListRequest());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/beerlist" component={BeerList} />
        <Route exact path="/cart" component={CartList} />
      </Switch>
    </Router>
  );
};

export default Routes;
