import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';
import { ContainerStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/listColumn';

const BeerList = () => {
  const dispatch = useDispatch();
  const { renderData, dataLoading } = useSelector(state => ({
    dataLoading: state.beerListReducer.loading,
    renderData: state.beerListReducer.renderData,
  }));
  const { modifiedColumns, isModified, columnLoading } = useSelector(state => ({
    modifiedColumns: state.listColumnReducer.modifiedColumns,
    isModified: state.listColumnReducer.isModified,
    columnLoading: state.listColumnReducer.loading,
  }));

  const columnDragHandler = (sourceIndex, destinationIndex) => {
    dispatch(setColumnsRequest(sourceIndex, destinationIndex, modifiedColumns));
  };

  return (
    <S.Container>
      <MaterialTable
        components={{
          Pagination: PatchedPagination,
        }}
        columns={modifiedColumns.map(({ field, title }) => ({ field, title }))}
        data={renderData}
        title="BEER LIST"
        icons={tableIcons}
        isLoading={!(dataLoading === false && columnLoading === false)}
        onColumnDragged={columnDragHandler}
      />
    </S.Container>
  );
};

const S = {};
S.Container = styled.section`
  ${ContainerStyle}
`;

export default BeerList;
