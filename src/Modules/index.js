import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from 'immer';
import beerListReducer from './beerList';
import getBeerListSaga from './saga/beerListSaga';

enableES5();

const rootReducer = combineReducers({ beerListReducer });

// export default rootReducer;
export default rootReducer;

// wathcer saga
export function* rootSaga() {
  yield all([getBeerListSaga()]);
}
