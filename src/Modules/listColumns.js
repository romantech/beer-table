import defaultColumns from '../Utils/defaultColumns';

const initialState = {
  loading: false,
  error: null,
  defaultColumns,
  modifiedColumns: defaultColumns,
};

export const SET_COLUMNS_REQUEST = 'listColumns/SET_COLUMNS_REQUEST';
export const SET_COLUMNS_SUCCESS = 'listColumns/SET_COLUMNS_SUCCESS';
export const SET_COLUMNS_FAILED = 'listColumns/SET_COLUMNS_FAILED';

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

const listColumnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLUMNS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_COLUMNS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        modifiedColumns: action.payload,
      };
    case SET_COLUMNS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default listColumnReducer;
