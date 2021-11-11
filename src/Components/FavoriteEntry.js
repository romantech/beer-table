/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { Popconfirm, message, Modal } from 'antd';
import { removeFromFavorite } from '../Modules/favoriteList';
import ModalContents from './ModalContents';
import { beerInfoEntries } from '../Constants';
import useImage from '../Hooks/useImage';

const FavoriteEntry = function ({ data }) {
  const dispatch = useDispatch();
  const [Image] = useImage(data.image_url);

  const removeHandler = () => {
    dispatch(removeFromFavorite(data.id));
    message.success('삭제 되었습니다');
  };

  const detailViewHandler = () => {
    Modal.info({
      title: '맥주 상세정보',
      content: <ModalContents data={data} />,
      width: '58vw',
      maskClosable: true,
    });
  };

  return (
    <S.Wrapper>
      <section>
        <Image />
      </section>
      <section>
        <h1>
          {data.name} <span>{data.tagline}</span>
        </h1>
        <div>
          {beerInfoEntries.slice(4, 9).map(({ title, field }) => (
            <span key={field}>{`${title} ${data[field]}`}</span>
          ))}
        </div>
      </section>
      <section>
        <button type="button" onClick={detailViewHandler}>
          자세히 보기
        </button>
        <Popconfirm
          placement="left"
          title="즐겨찾기에서 삭제하시겠습니까?"
          onConfirm={removeHandler}
          okText="Yes"
          cancelText="No"
        >
          <button type="button">삭제</button>
        </Popconfirm>
      </section>
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

  section:nth-child(1) {
    left: -10px;
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section:nth-child(2) {
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
      display: flex;
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

  section:nth-child(3) {
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
