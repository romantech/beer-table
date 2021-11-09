import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from 'immer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import beerListReducer from './beerList';
import favoriteListReducer from './favoriteList';
import listColumnReducer from './listColumns';
import getBeerListSaga from './saga/beerListSaga';
import listColumnSaga from './saga/listColumnSaga';

enableES5();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['beerListReducer', 'listColumnReducer', 'favoriteListReducer'],
};

const rootReducer = combineReducers({
  beerListReducer,
  listColumnReducer,
  favoriteListReducer,
});

export default persistReducer(persistConfig, rootReducer);

// Saga 실행 과정
// 1)Action Dispatch 2)Saga 미들웨어 실행(takeLatest) 3)비동기 통신(yield call)
// 4)통신 성공/실패에 따라 상응하는 액션 Dispatch(yield put) 5)상태 업데이트
export function* rootSaga() {
  yield all([getBeerListSaga(), listColumnSaga()]);
}

/**
 * Thunk vs Saga
 * 공통점 : dispatch() 메서드를 통해 store로 향하는 액션을 가로채는 미들웨어
 * Thunk : 액션 생성자가 함수를 반환하고, 해당 함수내에서 비동기 작업 진행(const fetch = (params) => (dispatch) => {...})
 * Saga : ES6의 제너레이터 문법을 이용하며, Dispatch하는 액션을 감지하는 리스너 형태로 동작
 */
