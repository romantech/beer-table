/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';
import { ContainerStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/listColumns';
import abvRange from '../Utils/abvRange';
import AbvFilterButton from '../Components/AbvFilterButton';
import filterDataByAbv from '../Utils/filterDataByAbv';

const BeerList = () => {
  const dispatch = useDispatch();
  const { renderData, isDataLoaded } = useSelector(state => ({
    renderData: state.beerListReducer.renderData,
    isDataLoaded: state.beerListReducer.loading,
  }));
  const { columns, isColumnLoaded } = useSelector(state => ({
    columns: state.listColumnReducer.modifiedColumns,
    isColumnLoaded: state.listColumnReducer.loading,
  }));

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRange, setSelectedRange] = useState(0);

  const columnDragHandler = (fromIdx, toIdx) => {
    dispatch(setColumnsRequest(fromIdx, toIdx, columns));
  };

  const tableStyles = {
    headerStyle: {
      backgroundColor: '#1890FF',
      color: '#FFF',
      fontSize: '1rem',
    },
    rowStyle: rowData => ({
      backgroundColor: selectedRow === rowData.tableData.id ? '#EEE' : '#FFF',
    }),
  };

  const filteredData = filterDataByAbv(selectedRange, renderData);

  return (
    <S.Container>
      <S.FilterArea>
        {abvRange.map(({ range, unit }, idx) => {
          const props = { selectedRange, setSelectedRange, range, unit, idx };
          return <AbvFilterButton key={range + unit} {...props} />;
        })}
        <h3>알콜 도수(ABV) 선택</h3>
      </S.FilterArea>
      <MaterialTable
        components={{
          Pagination: PatchedPagination,
        }}
        columns={columns.map(({ field, title, cellStyle }) => ({
          field,
          title,
          cellStyle,
        }))}
        data={filteredData}
        title="BEER LIST"
        icons={tableIcons}
        isLoading={!(isDataLoaded === false && isColumnLoaded === false)}
        onRowClick={(_, selected) => setSelectedRow(selected.tableData.id)}
        onColumnDragged={columnDragHandler}
        options={tableStyles}
      />
    </S.Container>
  );
};

const S = {};
S.Container = styled.section`
  ${ContainerStyle}
  font-size: 1rem;
`;

S.FilterArea = styled.section`
  background: #ffffff2d;
  width: 100%;
  height: 10vh;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;

  h3 {
    color: white;
    margin: 0;
  }
`;

export default BeerList;
