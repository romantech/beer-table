import tableColumns from '../Utils/tableColumns';

const initialState = {
  isModified: false,
  originalColumns: tableColumns,
  modifiedColumns: tableColumns,
};

export const SET_COLUMNS = 'listColumn/SET_COLUMNS';

export const setColumns = (sourceIndex, destinationIndex) => ({
  type: SET_COLUMNS,
  payload: { sourceIndex, destinationIndex },
});

const listColumnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLUMNS:
      return {
        ...state,
        isModified: true,
        modifiedColumns: action.payload,
      };
    default:
      return state;
  }
};

export default listColumnReducer;
