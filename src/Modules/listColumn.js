import tableColumns from '../Utils/tableColumns';

const initialState = {
  loading: false,
  isModified: false,
  error: null,
  originalColumns: tableColumns,
  modifiedColumns: tableColumns,
};

export const SET_COLUMNS_REQUEST = 'listColumn/SET_COLUMNS_REQUEST';
export const SET_COLUMNS_SUCCESS = 'listColumn/SET_COLUMNS_SUCCESS';
export const SET_COLUMNS_FAILED = 'listColumn/SET_COLUMNS_FAILED';

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
        isModified: true,
        error: null,
        modifiedColumns: action.payload,
      };
    case SET_COLUMNS_FAILED:
      return {
        ...state,
        loading: false,
        isModified: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default listColumnReducer;
