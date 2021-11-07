/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components/macro';
import bearIcon from '../Assets/beerIcon.png';

const Home = ({ history }) => {
  const beerList = useSelector(state => state.beerListReducer);

  return (
    <S.Container>
      <h1>
        저장된 맥주 정보 <span>{`${beerList.data?.length ?? 88}개`}</span>
      </h1>
      <button type="button" onClick={() => history.push('/beerlist')}>
        <h2>맥주 리스트 보러가기</h2>
        <img src={bearIcon} alt="bearIcon" />
      </button>
    </S.Container>
  );
};

const S = {};

S.LineStyle = css`
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 8px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.$hover};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

S.Container = styled.section`
  background: ${({ theme }) => theme.$background};
  height: calc(100vh - 64px);
  display: grid;
  place-content: center;

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
    ${S.LineStyle}

    :hover {
      color: ${({ theme }) => theme.$hover};
    }
  }

  img {
    height: 60px;
    position: relative;
    top: -10px;
  }
`;

export default Home;
