import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { clearCartAction } from '../Modules/cartList';
import CartEntry from '../Components/CartEntry';
import { ContainerStyle } from '../Styles/commonStyles';
import { showConfirmModal } from '../Utils';

const CartListPage = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beerListReducer);
  const cartList = useSelector(state => state.cartListReducer.cartList);

  const clearCartHandler = () => {
    if (cartList.length > 0) {
      const options = {
        title: '주의',
        content: `장바구니에 있는 모든 제품(${cartList.length})을 삭제하시겠습니까?`,
        onOk: () => dispatch(clearCartAction()),
        onCancel: () => {},
      };
      showConfirmModal(options);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h2>{`총 ${cartList?.length}개 제품이 추가되었습니다`}</h2>
        <button type="button" onClick={clearCartHandler}>
          모두 삭제
        </button>
      </S.Header>
      <S.ListWrapper isEmpty={cartList.length === 0}>
        {cartList.length > 0 ? (
          cartList.map(id => <CartEntry key={id} data={beers.rawData[id]} />)
        ) : (
          <h1>空空如也 🍻</h1>
        )}
      </S.ListWrapper>
    </S.Container>
  );
};

const S = {};
S.Container = styled.section`
  ${ContainerStyle}
`;

S.ListWrapper = styled.section`
  background: white;
  width: 60vw;
  min-height: 17vh;
  max-height: 70vh;
  border-radius: 5px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #808080c8;
  }

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: grid;
      place-content: center;
    `}

  h1 {
    font-size: 3rem;
  }
`;

S.Header = styled.section`
  background: #ffffff2d;
  height: 10vh;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    color: white;
    margin: 0;
  }

  button {
    background: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 6vw;
    height: 5vh;

    :hover {
      background: #e0e0e0;
    }
  }
`;

export default CartListPage;
