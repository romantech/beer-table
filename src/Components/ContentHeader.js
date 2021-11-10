/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';

const ContentHeader = ({ children, align }) => {
  return <Wrapper align={align}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  background: #ffffff2d;
  height: 10vh;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  gap: 1rem;

  h2,
  h3 {
    margin: 0;
    color: white;
  }

  h3 {
    font-size: 0.99rem;
  }

  button {
    border-radius: 5px;
    width: 6vw;
    min-width: 80px;
    max-width: 120px;
    height: 5vh;
    cursor: pointer;
    border: none;
  }
`;

export default ContentHeader;
