import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Nav from './Components/Nav';
import HomePage from './Pages/HomePage';
import BeerListPage from './Pages/BeerListPage';
import FavoritePage from './Pages/FavoritePage';
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
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/beerlist" component={BeerListPage} />
        <Route exact path="/favorites" component={FavoritePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
