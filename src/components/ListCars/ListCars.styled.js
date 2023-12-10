import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 100px;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;

  padding: 0;
  margin-bottom: 100px;
`;

export const LinkStyled = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`;
