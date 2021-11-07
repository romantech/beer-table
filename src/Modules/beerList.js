const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const GET_BEER_LIST_REQUEST = 'beerlist/GET_BEER_LIST_REQUEST';
export const GET_BEER_LIST_SUCCESS = 'beerlist/GET_BEER_LIST_SUCCESS';
export const GET_BEER_LIST_FAILED = 'beerlist/GET_BEER_LIST_FAILED';

export const getBeerListRequest = () => ({
  type: GET_BEER_LIST_REQUEST,
});
export const getBeerListSuccess = payload => ({
  type: GET_BEER_LIST_SUCCESS,
  payload,
});
export const getBeerListFailed = payload => ({
  type: GET_BEER_LIST_FAILED,
  payload,
});

const beerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BEER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_BEER_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default beerListReducer;
