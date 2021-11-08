import React from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';
import { ContainerStyle } from '../Styles/commonStyles';
import { setColumns } from '../Modules/listColumn';
import tableColumns from '../Utils/tableColumns';

const BeerList = () => {
  const dispatch = useDispatch();
  const { renderData } = useSelector(state => ({
    renderData: state.beerListReducer.renderData,
  }));
  const { modifiedColumns, isModified } = useSelector(state => ({
    modifiedColumns: state.listColumnReducer.modifiedColumns,
    isModified: state.listColumnReducer.isModified,
  }));

  const columnDragHandler = (sourceIndex, destinationIndex) => {
    dispatch(setColumns(sourceIndex, destinationIndex));
  };

  return (
    <S.Container>
      <MaterialTable
        components={{
          Pagination: PatchedPagination,
        }}
        columns={tableColumns}
        data={renderData}
        title="BEER LIST"
        icons={tableIcons}
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
