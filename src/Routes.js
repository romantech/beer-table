import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Components/Nav';
import HomePage from './Pages/HomePage';
import BeerListPage from './Pages/BeerListPage';
import FavoritePage from './Pages/FavoritePage';
import { getBeerListRequest } from './Modules/beerList';
import NotFoundPage from './Components/NotFoundPage';

const Routes = function () {
  const dispatch = useDispatch();
  const { rawData } = useSelector(({ beerList }) => beerList);

  useEffect(() => {
    if (!rawData || rawData.length < 325) dispatch(getBeerListRequest());
  }, [dispatch, rawData]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/beerlist" component={BeerListPage} />
        <Route exact path="/favorites" component={FavoritePage} />
        <Route component={NotFoundPage} />
        {/* path에 아무것도 입력하지 않으면 모든 경로에 매칭됨 */}
      </Switch>
    </Router>
  );
};

export default Routes;
