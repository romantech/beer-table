/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';

const FunctionWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  background: #ffffff2d;
  height: 10vh;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2,
  h3 {
    margin: 0;
    color: #ffffff81;
  }

  h3 {
    font-size: 0.99rem;
  }

  button {
    border-radius: 5px;
    width: fit-content;
    padding: 15px;
    cursor: pointer;
    border: none;

    svg {
      width: 2rem;
    }
  }
`;

export default FunctionWrapper;
