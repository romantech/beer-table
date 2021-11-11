/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Spin } from 'antd';
import beerIcon from '../Assets/beer.png';
import { ContainerStyle, UnderlineStyle } from '../Styles/commonStyles';

const HomePage = function ({ history }) {
  const { rawData, loading } = useSelector(state => state.beerList);

  return (
    <S.Container>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <h1>
            <span>{`${rawData?.length}개`}</span> 맥주의 상세 가이드
          </h1>
          <button type="button" onClick={() => history.push('/beerlist')}>
            <h2>맥주 리스트 보러가기</h2>
            <img src={beerIcon} alt="beerIcon" />
          </button>
        </>
      )}
    </S.Container>
  );
};

const S = {};

S.Container = styled.section`
  ${ContainerStyle}

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  h1,
  h2 {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 30px 0;
    position: relative;
    font-weight: bold;
  }

  h1 {
    margin-top: -10vh;
    font-size: 10vh;

    span {
      background: ${({ theme }) => theme.$highlight};
      border-radius: 5px;
      padding: 0 10px;
    }
  }
  h2 {
    margin-top: -5vh;
    font-size: 5vh;
    ${UnderlineStyle}

    :hover {
      color: ${({ theme }) => theme.$hover};
    }
  }

  img {
    height: 60px;
    position: relative;
    top: -13px;
    margin-left: 10px;
  }
`;

export default HomePage;
