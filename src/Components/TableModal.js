/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';

const TableModal = ({ data }) => {
  return (
    <S.Container>
      <img src={data.image_url} alt="beer_image" />
      <S.ContentWrapper>
        <h1>{data.name}</h1>
        <h3>{data.description}</h3>
        <hr />
        <span>ABV : {data.abv}</span>
        <span>PH : {data.ph}</span>
        <span>IBU : {data.ibu}</span>
        <span>SRM : {data.srm}</span>
        <span>EBC : {data.ebc}</span>
        <span>TARGET FG : {data.target_fg}</span>
        <span>TARGET OG : {data.target_og}</span>
        <span>FIRST BREWED : {data.first_brewed}</span>
        <span>TAGLINE : {data.tagline}</span>
      </S.ContentWrapper>
    </S.Container>
  );
};

const S = {};
S.Container = styled.section`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
    margin: 1px 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }

  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  overflow: auto;

  img {
    height: 400px;
    object-fit: cover;
  }
`;

S.ContentWrapper = styled.section`
  height: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;

  hr {
    width: 100%;
    border: 2px solid black;
  }

  h1 {
    margin: -5px 0 20px 0;
    text-align: center;
  }

  h3 {
    font-style: italic;
  }

  span:after {
    content: '';
    display: block;
    border-bottom: 0.5px solid lightgray;
    margin: 8px 0;
  }
`;

export default TableModal;
