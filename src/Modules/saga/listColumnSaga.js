import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SET_COLUMNS_REQUEST,
  setColumnsSuccess,
  setColumnsFailed,
} from '../listColumn';

const changeColumnIndex = (fromIdx, toIdx, columns) => {
  const [fromValue, toValue] = [columns[fromIdx], columns[toIdx]];
  columns[fromIdx] = toValue;
  columns[toIdx] = fromValue;
  return columns;
};

function* setColumn({ payload }) {
  const { fromIdx, toIdx, columns } = payload;
  try {
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
