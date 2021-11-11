// Duck 패턴 https://github.com/JisuPark/ducks-modular-redux

import { beerInfoEntries } from '../Constants';

const tableColumns = beerInfoEntries
  .filter(({ isTable }) => isTable)
  .map(({ title, field, cellStyle }) => ({ title, field, cellStyle }));

const initialState = {
  loading: false,
  error: null,
  isModified: false,
  defaultColumns: [...tableColumns],
  modifiedColumns: [...tableColumns],
};

export const SET_COLUMNS_REQUEST = 'tableColumns/SET_COLUMNS_REQUEST';
export const SET_COLUMNS_SUCCESS = 'tableColumns/SET_COLUMNS_SUCCESS';
export const SET_COLUMNS_FAILED = 'tableColumns/SET_COLUMNS_FAILED';
export const RESET_COLUMNS = 'tableColumns/RESET_COLUMNS';

export const setColumnsRequest = (fromIdx, toIdx, columns) => ({
  type: SET_COLUMNS_REQUEST,
  payload: { fromIdx, toIdx, columns },
});

export const setColumnsSuccess = payload => ({
  type: SET_COLUMNS_SUCCESS,
  payload,
});

export const setColumnsFailed = payload => ({
  type: SET_COLUMNS_FAILED,
  payload,
});

export const resetColumns = () => ({ type: RESET_COLUMNS });

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case SET_COLUMNS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_COLUMNS_SUCCESS:
      return {
        ...state,
        loading: false,
        isModified: true,
        error: null,
        modifiedColumns: payload,
      };
    case SET_COLUMNS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case RESET_COLUMNS:
      return {
        ...state,
        isModified: false,
        modifiedColumns: [...state.defaultColumns],
      };
    default:
      return state;
  }
}
