// Duck 패턴 https://github.com/JisuPark/ducks-modular-redux

const initialState = {
  cartList: [],
};

export const ADD_CART = '/cartList/ADD_CART';
export const REMOVE_CART = '/cartList/REMOVE_CART';
export const CLEAR_CART = '/cartList/CLEAR_CART';

export const addCartAction = beerId => ({
  type: ADD_CART,
  payload: beerId,
});

export const removeCartAction = beerId => ({
  type: REMOVE_CART,
  payload: beerId,
});

export const clearCartAction = () => ({
  type: CLEAR_CART,
});

const cartListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cartList: [...state.cartList, action.payload],
      };
    case REMOVE_CART:
      return {
        cartList: state.cartList.filter(id => id !== action.payload),
      };
    case CLEAR_CART:
      return {
        cartList: [],
      };
    default:
      return state;
  }
};

export default cartListReducer;
