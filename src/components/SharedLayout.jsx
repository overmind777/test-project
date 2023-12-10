import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <NavBar />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  width: 1440px;
`;

const WrapperOutlet = styled.div`
  padding: 70px;
`;
