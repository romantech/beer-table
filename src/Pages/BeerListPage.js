import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { AddBox } from '@material-ui/icons';
import { Modal, notification } from 'antd';
import ModalContents from '../Components/ModalContents';
import tableIcons from '../Assets/tableIcons';
import Pagination from '../Components/PatchedPagination';
import { ContainerStyle, ScrollStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/tableColumns';
import { addToFavorites } from '../Modules/favoriteList';
import { filterDataByAbv, getTableOptions } from '../Utils';
import { abvRange } from '../Constants';
import BeerListFunction from '../Components/BeerListFunction';

const BeerListPage = function () {
  const dispatch = useDispatch();
  const beers = useSelector(({ beerList }) => beerList);
  const columns = useSelector(({ tableColumns }) => tableColumns);
  const { favorites } = useSelector(({ favoriteList }) => favoriteList);

  const [selectedRange, setSelectedRange] = useState(new Set());

  const columnDragHandler = (fromIdx, toIdx) => {
    dispatch(setColumnsRequest(fromIdx, toIdx, columns.modifiedColumns));
  };

  const rowClickHandler = (_, { id }) => {
    Modal.info({
      title: '맥주 상세정보',
      content: <ModalContents data={beers.rawData.find(el => el.id === id)} />,
      width: '58vw',
      maskClosable: true,
    });
  };

  const actionClickHandler = (_, { name, id }) => {
    const isAdded = favorites?.some(favoriteId => favoriteId === id);
    if (!isAdded) {
      dispatch(addToFavorites(id));
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
      <BeerListFunction
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
  ${ContainerStyle};
  font-size: 1rem;
`;

S.TableWrapper = styled.section`
  ${ScrollStyle};
  width: 75vw;
  max-height: 68vh;
  overflow: auto;
`;

export default BeerListPage;
