// Duck 패턴 https://github.com/JisuPark/ducks-modular-redux

const initialState = {
  favorites: [],
};

export const ADD_FAVORITES = 'favoriteList/ADD_FAVORITES';
export const REMOVE_FAVORITES = 'favoriteList/REMOVE_FAVORITES';
export const CLEAR_FAVORITES = 'favoriteList/CLEAR_FAVORITES';

export const addToFavorites = beerId => ({
  type: ADD_FAVORITES,
  payload: beerId,
});

export const removeFromFavorites = beerId => ({
  type: REMOVE_FAVORITES,
  payload: beerId,
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FAVORITES:
      return {
        favorites: state.favorites.filter(id => id !== payload),
      };
    case CLEAR_FAVORITES:
      return {
        favorites: [],
      };
    default:
      return state;
  }
}
