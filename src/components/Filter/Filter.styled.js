import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 51px;
  left: 0;
  width: 100vw;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  background-color: white;
`;

export const FormStyled = styled.form`
  display: flex;
  gap: 18px;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WrapperMileage = styled.div`
  height: 20px;
  display: flex;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 136px;
  height: 75px;
`;

export const StyledInput1 = styled.input`
  width: 117px;
  height: 20px;
  padding: 14px 18px 14px 18px;
`;

export const StyledInput2 = styled.input`
  width: 89px;
  height: 20px;
  padding: 14px 18px 14px 18px;
`;

export const InputMileageLeft = styled.input`
  height: 20px;
  padding: 14px 0px 14px 24px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
export const InputMileageRight = styled.input`
  height: 20px;
  padding: 14px 5px 14px 24px;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const ButtonStyled = styled.button`
  height: 48px;
  padding: 14px 44px;
`;
