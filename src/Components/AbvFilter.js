/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button, Tooltip } from 'antd';
import { ControlFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import ContentHeader from './ContentHeader';
import { abvRange } from '../Constants';
import { resetColumns } from '../Modules/listColumns';

const AbvFilter = ({ selectedRange, setSelectedRange }) => {
  const dispatch = useDispatch();
  const resetColumn = () => {
    dispatch(resetColumns());
  };

  return (
    <ContentHeader>
      <div>
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
      </div>
      <Tooltip title="컬럼 초기화">
        <Button
          ghost
          onClick={resetColumn}
          icon={<ControlFilled style={{ fontSize: '2rem' }} />}
          size="large"
        />
      </Tooltip>
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
