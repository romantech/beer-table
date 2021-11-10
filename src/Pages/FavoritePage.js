import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavorite } from '../Modules/favoriteList';
import FavoriteEntry from '../Components/FavoriteEntry';
import { ContainerStyle } from '../Styles/commonStyles';
import { showConfirmModal } from '../Utils';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beerListReducer);
  const favorites = useSelector(state => state.favoriteListReducer.favorites);

  const clearFavoritesHandler = () => {
    if (favorites.length > 0) {
      const options = {
        title: '주의',
        content: `즐겨찾기에 있는 모든 맥주(${favorites.length})를 삭제하시겠습니까?`,
        onOk: () => dispatch(clearFavorite()),
        onCancel: () => {},
      };
      showConfirmModal(options);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h2>{`총 ${favorites?.length}개 맥주가 추가되었습니다`}</h2>
        <button type="button" onClick={clearFavoritesHandler}>
          모두 삭제
        </button>
      </S.Header>
      <S.ListWrapper isEmpty={favorites.length === 0}>
        {favorites.length > 0 ? (
          favorites.map(id => (
            <FavoriteEntry key={id} data={beers.rawData[id]} />
          ))
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
  min-height: 18vh;
  max-height: 70vh;
  border-radius: 5px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #adadadc6;
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
    min-width: 80px;
    max-width: 110px;
    height: 5vh;

    :hover {
      background: #e0e0e0;
    }
  }
`;

export default FavoritePage;
