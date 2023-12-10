import React from 'react';

import {
  ButtonStyled,
  FormStyled,
  InputMileageLeft,
  InputMileageRight,
  StyledInput1,
  StyledInput2,
  Wrapper,
  WrapperButton,
  WrapperInput,
  WrapperMileage,
} from './Filter.styled';

const Filter = () => {
  return (
    <Wrapper>
      <FormStyled>
        <WrapperInput>
          <label htmlFor="brand">Car brand</label>
          <StyledInput1 id="brand" type="text" placeholder="Enter the text" />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="price">Price/ 1 hour</label>
          <StyledInput2 id="price" type="text" placeholder="To $" />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="mileageFrom">Сar mileage / km</label>
          <WrapperMileage>
            <InputMileageLeft id="mileageFrom" type="text" placeholder="From" />
            <InputMileageRight id="mileageTo" type="text" placeholder="To" />
          </WrapperMileage>
        </WrapperInput>
        <WrapperButton>
          <ButtonStyled>Search</ButtonStyled>
        </WrapperButton>
      </FormStyled>
    </Wrapper>
  );
};

export default Filter;
