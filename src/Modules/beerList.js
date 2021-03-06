// Duck 패턴 https://github.com/JisuPark/ducks-modular-redux

const initialState = {
  loading: false,
  rawData: null,
  error: null,
};

export const GET_BEER_LIST_REQUEST = 'beerList/GET_BEER_LIST_REQUEST';
export const GET_BEER_LIST_SUCCESS = 'beerList/GET_BEER_LIST_SUCCESS';
export const GET_BEER_LIST_FAILED = 'beerList/GET_BEER_LIST_FAILED';

export const getBeerListRequest = () => ({
  type: GET_BEER_LIST_REQUEST,
});
export const getBeerListSuccess = rawData => ({
  type: GET_BEER_LIST_SUCCESS,
  payload: rawData,
});
export const getBeerListFailed = payload => ({
  type: GET_BEER_LIST_FAILED,
  payload,
});

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case GET_BEER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BEER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        rawData: payload,
      };
    case GET_BEER_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
