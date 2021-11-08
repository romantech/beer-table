import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';
import { ContainerStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/listColumns';

const BeerList = () => {
  const dispatch = useDispatch();
  const { renderData, dataLoading } = useSelector(state => ({
    dataLoading: state.beerListReducer.loading,
    renderData: state.beerListReducer.renderData,
  }));
  const { modifiedColumns, columnLoading } = useSelector(state => ({
    modifiedColumns: state.listColumnReducer.modifiedColumns,
    columnLoading: state.listColumnReducer.loading,
  }));

  const [selectedRow, setSelectedRow] = useState(null);

  const columnDragHandler = (fromIdx, toIdx) => {
    dispatch(setColumnsRequest(fromIdx, toIdx, modifiedColumns));
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

  return (
    <S.Container>
      <MaterialTable
        components={{
          Pagination: PatchedPagination,
        }}
        columns={modifiedColumns.map(({ field, title, cellStyle }) => ({
          field,
          title,
          cellStyle,
        }))}
        data={renderData}
        title="BEER LIST"
        icons={tableIcons}
        isLoading={!(dataLoading === false && columnLoading === false)}
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

export default BeerList;
