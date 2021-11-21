import { call, all, put, takeLatest } from 'redux-saga/effects';

import {
  GET_BEER_LIST_REQUEST,
  getBeerListSuccess,
  getBeerListFailed,
} from '../beerList';
import APIs from '../../APIs';

function* getBeerList() {
  try {
    // const { data } = call(APIs.getBeers, 1, 80) -> 결과반환까지 대기
    // yield call 첫번째 함수의 파라미터를 넘길 땐 call 두번째 파라미터에 명시
    // call(func, funcParams1, funcParams2)

    const pageNums = Array.from(Array(5).keys(), x => x + 1); // [1, 2, 3, 4, 5]

    // yield all[call(...), call(...)] -> 병렬 처리 promise.all과 동일. 프로미스가 하나라도 거절되면 모두 거절.
    const [...dataByPages] = yield all(
      pageNums.map(x => call(APIs.getBeersByPage, x, 80)),
    ); // [{...}, {...}] 페이지별 호출

    const mergedPages = dataByPages.reduce(
      (merged, { data }) => merged.concat(data),
      [],
    ); // [...]
    yield put(getBeerListSuccess(mergedPages)); // action dispatch
  } catch (err) {
    yield put(getBeerListFailed(err.response.status));
  }
}
export default function* getBeerListSaga() {
  yield takeLatest(GET_BEER_LIST_REQUEST, getBeerList);
  // yield takeLatest(...) : 가장 마지막(최신) 실행된 액션에 대해서만 핸들러를 실행
  // 이전 액션을 처리하는 동안 동일 타입의 새로운 액션이 디스패치되면 기존 작업은 무시하고 새로운 작업 시작
  // REQUEST_DATA 액션 객체가 들어오면(첫번째 인자) getApiData(두번째 인자) 실행
}
