// Duck 패턴 https://github.com/JisuPark/ducks-modular-redux

const initialState = {
  favorites: [],
};

export const ADD_FAVORITE = '/favoriteList/ADD_FAVORITE';
export const REMOVE_FAVORITE = '/favoriteList/REMOVE_FAVORITE';
export const CLEAR_FAVORITE = '/favoriteList/CLEAR_FAVORITE';

export const addToFavorite = beerId => ({
  type: ADD_FAVORITE,
  payload: beerId,
});

export const removeFromFavorite = beerId => ({
  type: REMOVE_FAVORITE,
  payload: beerId,
});

export const clearFavorite = () => ({
  type: CLEAR_FAVORITE,
});

const favoriteListReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FAVORITE:
      return {
        favorites: state.favorites.filter(id => id !== payload),
      };
    case CLEAR_FAVORITE:
      return {
        favorites: [],
      };
    default:
      return state;
  }
};

export default favoriteListReducer;
