/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import ContentHeader from './ContentHeader';
import { abvRange } from '../Constants';

const AbvFilter = ({ selectedRange, setSelectedRange }) => {
  return (
    <ContentHeader align="left">
      {abvRange.map(({ range, unit }, idx) => {
        const [fromAbv, toAbv] = range;
        const isLast = fromAbv + toAbv === 110;
        return (
          <S.Button
            type="button"
            key={range.join('-') + unit}
            selected={selectedRange.has(idx)}
            onClick={() => {
              if (selectedRange.has(idx)) selectedRange.delete(idx);
              else selectedRange.add(idx);
              setSelectedRange(new Set([...selectedRange]));
            }}
          >
            {isLast ? unit : `${fromAbv}-${toAbv}${unit}`}
          </S.Button>
        );
      })}
      <h3>알콜 도수(ABV) 필터</h3>
    </ContentHeader>
  );
};

const S = {};

S.Button = styled.button`
  background: white;

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.$highlight};
      color: white;
    `}

  :hover {
    background: ${({ selected }) => (selected ? '#319cff' : '#e0e0e0;')};
  }
`;

export default AbvFilter;
