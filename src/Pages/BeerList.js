import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Modal } from 'antd';
import { AddBox } from '@material-ui/icons';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';
import { ContainerStyle, ScrollStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/listColumns';
import { addCartAction } from '../Modules/cartList';
import AbvFilterButton from '../Components/AbvFilterButton';
import ModalContents from '../Components/ModalContents';
import { getTableOptions, filterDataByAbv } from '../Utils';
import { abvRange } from '../Constants';

const BeerList = () => {
  const dispatch = useDispatch();
  const { rawData, renderData, isDataLoaded } = useSelector(state => ({
    rawData: state.beerListReducer.rawData,
    renderData: state.beerListReducer.renderData,
    isDataLoaded: state.beerListReducer.loading,
  }));
  const { columns, isColumnLoaded } = useSelector(state => ({
    columns: state.listColumnReducer.modifiedColumns,
    isColumnLoaded: state.listColumnReducer.loading,
  }));
  const cartList = useSelector(state => state.cartListReducer.cartList);

  const [selectedRange, setSelectedRange] = useState(new Set());

  const columnDragHandler = (fromIdx, toIdx) => {
    dispatch(setColumnsRequest(fromIdx, toIdx, columns));
  };

  const rowClickHandler = (_, selected) => {
    const { id } = selected.tableData;
    Modal.info({
      title: '맥주 상세정보',
      width: '58vw',
      content: <ModalContents data={rawData[id]} />,
      onOk() {},
    });
  };

  const actionClickHandler = (_, { tableData }) => {
    const isAdded = cartList?.some(id => id === tableData.id);
    if (!isAdded) {
      dispatch(addCartAction(tableData.id));
    }
    Modal.info({
      title: '알림',
      content: isAdded ? '이미 추가한 상품입니다' : '장바구니에 추가했습니다',
    });
  };

  const tableOptions = getTableOptions({});
  const filteredData = filterDataByAbv(
    [...selectedRange],
    renderData,
    abvRange,
  );

  return (
    <S.Container>
      <S.FilterArea>
        {abvRange.map(({ range, unit }, idx) => {
          const props = { selectedRange, setSelectedRange, range, unit, idx };
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <AbvFilterButton key={range.join('-') + unit} {...props} />;
        })}
        <h3>알콜 도수(ABV) 필터</h3>
      </S.FilterArea>
      <S.TableWrapper>
        <MaterialTable
          components={{
            Pagination: PatchedPagination,
          }}
          columns={columns.map(({ field, title, cellStyle }) => ({
            field,
            title,
            cellStyle,
          }))}
          data={filteredData ?? []}
          title="BEER LIST"
          icons={tableIcons}
          isLoading={!(isDataLoaded === false && isColumnLoaded === false)}
          onRowClick={rowClickHandler}
          onColumnDragged={columnDragHandler}
          options={tableOptions}
          actions={[
            rowData => ({
              icon: AddBox,
              tooltip: '장바구니 추가',
              onClick: actionClickHandler,
              disabled: cartList.some(id => id === rowData.tableData.id),
            }),
          ]}
          localization={{ header: { actions: 'CART' } }}
        />
      </S.TableWrapper>
    </S.Container>
  );
};

const S = {};
S.Container = styled.section`
  ${ContainerStyle}
  font-size: 1rem;
`;

S.TableWrapper = styled.section`
  ${ScrollStyle}
  width: 75vw;
  max-height: 68vh;
  overflow: auto;
`;

S.FilterArea = styled.section`
  background: #ffffff2d;
  height: 10vh;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;

  h3 {
    color: white;
    margin: 0;
    font-size: 0.99rem;
  }
`;

export default BeerList;
