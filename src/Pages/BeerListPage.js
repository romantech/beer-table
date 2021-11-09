import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { AddBox } from '@material-ui/icons';
import ModalContents from '../Components/ModalContents';
import tableIcons from '../Assets/tableIcons';
import Pagination from '../Components/PatchedPagination';
import { ContainerStyle, ScrollStyle } from '../Styles/commonStyles';
import { setColumnsRequest } from '../Modules/listColumns';
import { addToFavorite } from '../Modules/favoriteList';
import AbvFilterButton from '../Components/AbvFilterButton';
import {
  getTableOptions,
  filterDataByAbv,
  showInfoModal,
  showAutoCloseModal,
} from '../Utils';
import { abvRange } from '../Constants';

const BeerListPage = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beerListReducer);
  const columns = useSelector(state => state.listColumnReducer);
  const favorites = useSelector(state => state.favoriteListReducer.favorites);

  const [selectedRange, setSelectedRange] = useState(new Set());

  const columnDragHandler = (fromIdx, toIdx) => {
    dispatch(setColumnsRequest(fromIdx, toIdx, columns.modifiedColumns));
  };

  const rowClickHandler = (_, { tableData }) => {
    const options = {
      title: '맥주 상세정보',
      content: <ModalContents data={beers.rawData[tableData.id]} />,
      width: '58vw',
    };
    showInfoModal(options);
  };

  const actionClickHandler = (_, { tableData }) => {
    const { id } = tableData;
    const isAdded = favorites?.some(favoriteId => favoriteId === id);
    if (!isAdded) {
      dispatch(addToFavorite(id));
      showAutoCloseModal({ content: `즐겨찾기에 추가되었습니다.` });
    }
  };

  const tableOptions = getTableOptions({});
  const filteredData = filterDataByAbv(
    [...selectedRange],
    beers.renderData,
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
          components={{ Pagination }}
          columns={columns.modifiedColumns.map(
            ({ field, title, cellStyle }) => ({
              field,
              title,
              cellStyle,
            }),
          )}
          data={filteredData ?? []}
          title="BEER LIST"
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
              disabled: favorites.some(id => id === rowData.tableData.id),
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
