/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components/macro';
import { beerInfoEntries } from '../Constants';

const ModalContents = function ({ data }) {
  const headers = beerInfoEntries.slice(1, 4);
  const contents = beerInfoEntries.slice(4);
  const [loading, setLoading] = useState(true);

  return (
    <S.Container>
      <S.ImageWrapper loading={loading}>
        {loading && <Spin size="large" />}
        <img
          src={data.image_url}
          alt="beer_image"
          onLoad={() => setLoading(false)}
        />
      </S.ImageWrapper>

      <S.ContentWrapper>
        {headers.map(({ field }) => (
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
        {contents.map(({ title, field }) => (
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
  gap: 3rem;
  overflow: auto;
  height: 55vh;
  padding: 10px;
`;

S.ImageWrapper = styled.section`
  position: sticky;
  top: 0;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    /* margin: auto; */
    max-height: 80%;
    object-fit: cover;
    max-width: 80%;
    display: ${({ loading }) => loading && 'none'};
  }
`;

S.ContentWrapper = styled.section`
  height: 100%;
  width: 65%;
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
    text-align: left;
  }

  h1:nth-child(1) {
    color: black;
    font-weight: bold;
  }

  h1:nth-child(2) {
    margin-top: -3px;
    font-size: 1.3rem;
  }

  h1:nth-child(3) {
    font-size: 1.1rem;
    font-style: italic;
  }

  span:after {
    content: '';
    display: block;
    border-bottom: 0.5px solid lightgray;
    margin: 8px 0;
  }
`;

export default ModalContents;
