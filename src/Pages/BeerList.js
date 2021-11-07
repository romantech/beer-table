import React from 'react';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import tableIcons from '../Assets/tableIcons';
import PatchedPagination from '../Components/PatchedPagination';

const BeerList = () => {
  const beerList = useSelector(state => state.beerListReducer);
  console.log(beerList);

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        components={{
          Pagination: PatchedPagination,
        }}
        columns={[
          { title: 'Adı', field: 'name' },
          { title: 'Soyadı', field: 'surname' },
          { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
          {
            title: 'Doğum Yeri',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          {
            name: 'Mehmet',
            surname: 'Baran',
            birthYear: 1987,
            birthCity: 63,
          },
        ]}
        title="Demo Title"
        icons={tableIcons}
      />
    </div>
  );
};

export default BeerList;
