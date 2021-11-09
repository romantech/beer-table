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
  const isLast = fromAbv + toAbv === 110; // 마지막 인덱스는 10% 이상

  const clickHandler = () => {
    if (selectedRange.has(idx)) {
      selectedRange.delete(idx);
    } else {
      selectedRange.add(idx);
    }
    setSelectedRange(new Set([...selectedRange]));
  };

  return (
    <S.ButtonWrapper selected={selectedRange.has(idx)} onClick={clickHandler}>
      <button type="button">
        {isLast ? unit : `${fromAbv}-${toAbv}${unit}`}
      </button>
    </S.ButtonWrapper>
  );
};

const S = {};
S.ButtonWrapper = styled.div`
  background: white;
  border-radius: 5px;
  width: 6vw;
  min-width: 80px;
  max-width: 120px;
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
    background: ${({ selected }) => (selected ? '#319cff' : '#e0e0e0;')};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default FilterButton;
