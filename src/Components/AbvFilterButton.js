/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components/macro';

const FilterButton = ({
  range,
  unit,
  selectedRange,
  setSelectedRange,
  idx,
}) => {
  const [fromAbv, toAbv] = range;
  const isFirst = fromAbv + toAbv === 103; // 첫번째 인덱스는 All 전체
  const isLast = fromAbv + toAbv === 110; // 마지막 인덱스는 10% 이상

  return (
    <S.ButtonWrapper
      selected={selectedRange === idx}
      onClick={() => {
        setSelectedRange(idx);
      }}
    >
      <button type="button">
        {isFirst || isLast ? unit : `${fromAbv}-${toAbv}${unit}`}
      </button>
    </S.ButtonWrapper>
  );
};

const S = {};
S.ButtonWrapper = styled.div`
  background: white;
  border-radius: 5px;
  width: 6vw;
  height: 5vh;
  cursor: pointer;
  display: grid;
  place-content: center;

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.$highlight};
      color: white;
    `}

  :hover {
    ${({ selected }) =>
      selected === false &&
      css`
        background: #e0e0e0;
      `}
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default FilterButton;
