import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const TitleWrapper = styled.div`
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
  width: 274px;
  height: 44px;

  padding: 12px 99px;
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
