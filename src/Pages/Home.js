import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const Home = () => {
  const beerList = useSelector(s => s.beerListReducer.data);

  return <h1>{`저장된 맥주 정보 ${beerList?.length || 0}개`}</h1>;
};

export default Home;
