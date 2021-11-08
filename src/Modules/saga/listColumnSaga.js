import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SET_COLUMNS_REQUEST,
  setColumnsSuccess,
  setColumnsFailed,
} from '../listColumns';

const changeColumnIndex = (fromIdx, toIdx, columns) => {
  const [fromValue, toValue] = [columns[fromIdx], columns[toIdx]];
  columns[fromIdx] = toValue;
  columns[toIdx] = fromValue;
  return columns;
};

function* setColumn({ payload }) {
  const { fromIdx, toIdx, columns } = payload;
  try {
    // yield call 첫번째 함수의 파라미터를 넘길 땐 call 두번째 파라미터에 명시
    // call(func, funcParams1, funcParams2)
    const changedColumn = yield call(
      changeColumnIndex,
      fromIdx,
      toIdx,
      columns,
    );

    yield put(setColumnsSuccess(changedColumn));
  } catch {
    yield put(setColumnsFailed('error'));
  }
}

export default function* listColumnSaga() {
  yield takeLatest(SET_COLUMNS_REQUEST, setColumn);
}
