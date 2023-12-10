import React from 'react';

import Filter from '../components/Filter/Filter';
import ListCars from '../components/ListCars/ListCars';

import styled from 'styled-components';

const Catalog = () => {
  return (
    <Wrapper>
      <Filter />
      <ListCars />
    </Wrapper>
  );
};

export default Catalog;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
