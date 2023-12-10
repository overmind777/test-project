import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  align-items: center;
  margin-bottom: 8px;
`;

export const TextWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;

  color: rgba(18, 20, 23, 0.5);

  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemStyled = styled.li`
  width: 274px;
  list-style: none;
`;

export const ButtonStyled = styled.button`
  display: flex;
  width: ${props => props.width || '100%'};
  height: 44px;
  padding: 12px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SvgStyled = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'white'};
  display: inline-block;
  width: 18px;
  height: 18px;
`;
