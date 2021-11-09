/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from '../Modules/favoriteList';
import ModalContents from './ModalContents';
import { showInfoModal, showConfirmModal } from '../Utils';
import { beerInfoEntries } from '../Constants';

const FavoriteEntry = ({ data }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    const options = {
      title: '주의',
      content: `즐겨찾기에서 삭제하시겠습니까?`,
      onOk: () => dispatch(removeFromFavorite(data.id - 1)),
      onCancel: () => {},
    };
    showConfirmModal(options);
  };

  const detailViewHandler = () => {
    const options = {
      title: '맥주 상세정보',
      content: <ModalContents data={data} />,
      width: '58vw',
    };
    showInfoModal(options);
  };

  return (
    <S.Wrapper>
      <div>
        <img src={data.image_url} alt="beer_image" />
      </div>
      <div>
        <h1>
          {data.name} <span>{data.tagline}</span>
        </h1>
        <div>
          {beerInfoEntries.slice(3, 8).map(({ title, field }) => (
            <span key={field}>{`${title} ${data[field]}`}</span>
          ))}
        </div>
      </div>
      <div>
        <button type="button" onClick={detailViewHandler}>
          자세히 보기
        </button>
        <button type="button" onClick={removeHandler}>
          삭제
        </button>
      </div>
    </S.Wrapper>
  );
};

const S = {};
S.Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 18vh;
  border-bottom: 1px solid lightgray;
  gap: 3rem;

  div:nth-child(1) {
    left: -10px;
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-right: auto;

    h1 {
      font-size: 1.4rem;
      margin: 5px 0;

      span {
        font-size: 0.9rem;
        margin-left: 5px;
        font-style: italic;
      }
    }

    div {
      flex-direction: row;
      gap: 10px;
      margin-top: 5px;

      span {
        background: #d3d3d36f;
        padding: 5px 8px;
        border-radius: 10px;
      }
    }
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      background: white;
      padding: 8px 16px;
      border: 1px solid gray;
      border-radius: 5px;
      cursor: pointer;

      :hover {
        background: #ebebeb70;
      }
    }
  }
`;

export default FavoriteEntry;
