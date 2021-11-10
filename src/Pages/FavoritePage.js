import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, message, Empty, Button, Tooltip } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { clearFavorite } from '../Modules/favoriteList';
import FavoriteEntry from '../Components/FavoriteEntry';
import { ContainerStyle } from '../Styles/commonStyles';
import FunctionWrapper from '../Components/FunctionWrapper';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const { rawData: beers } = useSelector(state => state.beerListReducer);
  const { favorites } = useSelector(state => state.favoriteListReducer);

  const clearFavoritesHandler = () => {
    if (favorites.length > 0) {
      Modal.confirm({
        title: '주의',
        content: `즐겨찾기에 있는 모든 맥주(${favorites.length})를 삭제하시겠습니까?`,
        onOk: () => {
          dispatch(clearFavorite());
          message.info('모든 즐겨찾기가 삭제 되었습니다');
        },
      });
    }
  };

  const renderData = beers?.filter(beer =>
    favorites.some(id => id === beer.id),
  );

  return (
    <S.Container>
      <FunctionWrapper>
        <h2>{`총 ${favorites?.length}개 맥주가 추가되었습니다`}</h2>
        <Tooltip title="즐겨찾기 모두 삭제">
          <Button
            ghost
            onClick={clearFavoritesHandler}
            icon={<DeleteFilled style={{ fontSize: '1.8rem' }} />}
            size="large"
          />
        </Tooltip>
      </FunctionWrapper>
      <S.ListWrapper isEmpty={favorites.length === 0}>
        {favorites.length > 0 ? (
          renderData.map(entry => <FavoriteEntry key={entry.id} data={entry} />)
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="아직 즐겨찾기한 맥주가 없네요"
          />
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

export default FavoritePage;
