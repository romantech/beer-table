/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { removeCartAction } from '../Modules/cartList';
import ModalContents from './ModalContents';
import { showInfoModal, showAutoCloseModal } from '../Utils';

const CartEntry = ({ data }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeCartAction(data.id - 1));
    showAutoCloseModal({ content: '장바구니에서 삭제되었습니다.' });
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
        <h1>{data.name}</h1>
        <div>
          <span>{`${data.volume.value} ${data.volume.unit}`}</span>
          <span>{`ABV ${data.abv}`}</span>
          <span>{`IBU ${data.ibu}`}</span>
          <span>{`SRM ${data.srm || '0'}`}</span>
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
  height: 17vh;
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
      margin: 0;
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

export default CartEntry;
