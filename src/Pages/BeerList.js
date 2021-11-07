import React from 'react';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';

const BeerList = () => {
  const beerList = useSelector(state => state.beerListReducer);
  const columns = [
    {
      title: 'NAME',
      field: 'name',
    },
    {
      title: 'TAGLINE',
      field: 'tagline',
    },
    {
      title: 'ABV',
      field: 'abv',
    },
    {
      title: 'IBU',
      field: 'ibu',
    },
    {
      title: 'SRM',
      field: 'srm',
    },
    {
      title: 'EBC',
      field: 'ebc',
    },
    {
      title: 'PH',
      field: 'ph',
    },
  ];

  const filteredData = beerList.data?.map(beer => {
    return columns.reduce((acc, cur) => {
      if (cur.field in beer) {
        acc[cur.field] = beer[cur.field];
      }
      return acc;
    }, {});
  });

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        components={{
          Pagination: PatchedPagination,
        }}
        columns={columns}
        data={filteredData}
        title="BEER LIST"
        icons={tableIcons}
        onColumnDragged={(sourceIndex, destinationIndex) =>
          console.log(sourceIndex, destinationIndex)
        }
      />
    </div>
  );
};

export default BeerList;
