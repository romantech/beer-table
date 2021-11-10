import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { AddBox } from '@material-ui/icons';
import { notification, Modal } from 'antd';
import ModalContents from '../Components/ModalContents';
import tableIcons from '../Assets/tableIcons';
import Pagination from '../Components/PatchedPagination';
import { ContainerStyle, ScrollStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/listColumns';
import { addToFavorite } from '../Modules/favoriteList';
import { getTableOptions, filterDataByAbv } from '../Utils';
import { abvRange } from '../Constants';
import AbvFilter from '../Components/AbvFilter';

const BeerListPage = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beerListReducer);
  const columns = useSelector(state => state.listColumnReducer);
  const { favorites } = useSelector(state => state.favoriteListReducer);

  const [selectedRange, setSelectedRange] = useState(new Set());

  const columnDragHandler = (fromIdx, toIdx) => {
    dispatch(setColumnsRequest(fromIdx, toIdx, columns.modifiedColumns));
  };

  const rowClickHandler = (_, { id }) => {
    Modal.info({
      title: '맥주 상세정보',
      content: <ModalContents data={beers.rawData[id]} />,
      width: '58vw',
    });
  };

  const actionClickHandler = (_, { name, id }) => {
    const isAdded = favorites?.some(favoriteId => favoriteId === id);
    if (!isAdded) {
      dispatch(addToFavorite(id));
      notification.open({
        message: `${name}`,
        description: '즐겨찾기에 추가되었습니다',
        duration: 2.5,
      });
    }
  };

  const tableOptions = getTableOptions({});
  const filteredData = filterDataByAbv(
    [...selectedRange],
    beers.rawData,
    abvRange,
  );

  return (
    <S.Container>
      <AbvFilter
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />
      <S.TableWrapper>
        <MaterialTable
          components={{ Pagination }}
          columns={columns.modifiedColumns.map(
            ({ field, title, cellStyle }) => ({
              field,
              title,
              cellStyle,
            }),
          )}
          data={filteredData ?? []}
          title={`총 ${filteredData?.length || 0}개 맥주`}
          icons={tableIcons}
          isLoading={!(beers.loading === false && columns.loading === false)}
          onRowClick={rowClickHandler}
          onColumnDragged={columnDragHandler}
          options={tableOptions}
          actions={[
            rowData => ({
              icon: AddBox,
              tooltip: '즐겨찾기 추가',
              onClick: actionClickHandler,
              disabled: favorites.some(id => id === rowData.id),
            }),
          ]}
          localization={{ header: { actions: 'SAVE' } }}
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
  border-radius: 5px;
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

export default BeerListPage;
