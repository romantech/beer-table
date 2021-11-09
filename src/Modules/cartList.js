// Duck 패턴 https://github.com/JisuPark/ducks-modular-redux

const initialState = {
  cartList: [],
};

export const ADD_CART = '/cartList/ADD_CART';
export const REMOVE_CART = '/cartList/REMOVE_CART';

export const addCartAction = beerId => ({
  type: ADD_CART,
  payload: beerId,
});

export const removeCartAction = beerId => ({
  type: REMOVE_CART,
  payload: beerId,
});

const cartListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case REMOVE_CART:
      return {
        ...state,
        cartList: [...state.cartList.filter(id => id !== action.payload)],
      };
    default:
      return state;
  }
};

export default cartListReducer;
