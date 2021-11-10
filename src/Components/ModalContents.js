/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { beerInfoEntries } from '../Constants';

const ModalContents = ({ data }) => {
  return (
    <S.Container>
      <img src={data.image_url} alt="beer_image" />
      <S.ContentWrapper>
        {beerInfoEntries.slice(0, 3).map(({ field }) => (
          <h1 key={field}>{data[field]}</h1>
        ))}
        <hr />
        <div>
          <strong>YOU CAN ENJOY WITH...</strong>
        </div>
        <ul>
          {data.food_pairing.map(el => (
            <li key={el.split('')}>{el}</li>
          ))}
        </ul>
        <hr />
        {beerInfoEntries.slice(3).map(({ title, field }) => (
          <span key={field}>{`${title} : ${data[field]}`}</span>
        ))}
        <span>{`VOLUME : ${data.volume.value} ${data.volume.unit}`}</span>
      </S.ContentWrapper>
    </S.Container>
  );
};

const S = {};
S.Container = styled.section`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #a5a5a5;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  overflow: auto;
  height: 55vh;

  img {
    max-height: 90%;
    max-width: 20%;
    object-fit: cover;
  }
`;

S.ContentWrapper = styled.section`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 0.95rem;

  ul {
    margin: 0;
    padding: 8px 0;
    list-style-position: inside;
    list-style-type: circle;
  }

  hr {
    width: 100%;
    border: 1px solid black;
    margin: 12px 0;
  }

  h1 {
    text-align: center;
    margin: 5px 0;
    color: gray;
  }

  h1:nth-child(1) {
    color: black;
  }

  h1:nth-child(2) {
    margin-top: -3px;
    font-size: 1.3rem;
    font-weight: normal;
  }

  h1:nth-child(3) {
    text-align: left;
    font-size: 1.1rem;
    font-style: italic;
    font-weight: normal;
  }

  span:after {
    content: '';
    display: block;
    border-bottom: 0.5px solid lightgray;
    margin: 8px 0;
  }
`;

export default ModalContents;
