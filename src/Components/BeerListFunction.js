/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button, Tooltip, Popconfirm, message } from 'antd';
import { ControlFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import FunctionWrapper from './FunctionWrapper';
import { abvRange } from '../Constants';
import { resetColumns } from '../Modules/tableColumns';

const BeerListFunction = function ({ selectedRange, setSelectedRange }) {
  const { isModified } = useSelector(state => state.tableColumns);
  const dispatch = useDispatch();

  const resetColumn = () => {
    if (isModified) {
      dispatch(resetColumns());
      message.success('컬럼 순서를 초기화했습니다');
    } else {
      message.warn('컬럼 순서가 이미 초기화 상태입니다');
    }
  };

  return (
    <FunctionWrapper>
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
      <Popconfirm
        placement="top"
        title="컬럼 순서를 초기화하겠습니까?"
        onConfirm={resetColumn}
        onClick={() => isModified === false && resetColumn()}
        okText="Yes"
        cancelText="No"
        disabled={isModified === false}
      >
        <Tooltip title="컬럼 순서 초기화" zIndex="0">
          <Button
            ghost
            icon={<ControlFilled style={{ fontSize: '1.8rem' }} />}
            size="large"
          />
        </Tooltip>
      </Popconfirm>
    </FunctionWrapper>
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

export default BeerListFunction;
