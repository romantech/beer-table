import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_BEER_LIST_REQUEST,
  getBeerListSuccess,
  getBeerListFailed,
} from '../beerList';
import APIs from '../../APIs';

function* getBeerList() {
  try {
    const { data } = yield call(APIs.getBeerList); // yield call은 결과 반환시까지 기다려줌
    yield put(getBeerListSuccess(data)); // action dispatch
  } catch (err) {
    yield put(getBeerListFailed(err));
  }
}
export default function* getBeerListSaga() {
  yield takeLatest(GET_BEER_LIST_REQUEST, getBeerList);
  // yield takeLatest(...) : 가장 마지막 요청에 대해 어떤 함수를 실행시킬지 지정
  // REQUEST_DATA 액션 객체가 들어오면 getApiData 실행
}