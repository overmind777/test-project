import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = () => {
  return (
    <Wrapper>
      <NavStyled>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavStyled>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid black;
  background-color: #8fe5e5;
  z-index: 1;
`;

const NavStyled = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
