import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  z-index: 10;
`;

export const WrapperModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  height: 552px;
`;

export const CloseButton = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: rgba(18, 20, 23, 1);
  top: ${props => props.$top || '16px'};
  right: ${props => props.$right || '16px'};
  cursor: pointer;
`;
