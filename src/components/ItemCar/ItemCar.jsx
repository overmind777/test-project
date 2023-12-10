import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import sprite from '../../images/sprite.svg';

import { selectModal } from '../../redux/ModalSlice/selectors';
import { favoriteSelector } from '../../redux/Favorite/selectors';

import { addCar, openModal } from '../../redux/ModalSlice/modalSlice';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/Favorite/favoriteSlice';

import {
  ButtonStyled,
  ImgWrapper,
  ItemStyled,
  SvgStyled,
  Text,
  TextWrapper,
  TitleWrapper,
} from './ItemCar.styled';
import { Span } from '../Modal/Modal.styled';

const ItemCar = ({ data, index }) => {
  const dispatch = useDispatch();
  const stateModal = useSelector(selectModal);
  const { favorite } = useSelector(favoriteSelector);
  const [isCarFavorite, setIsCarFavorite] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = data;

  useEffect(() => {
    const body = document.body;
    if (stateModal) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [stateModal]);

  useEffect(() => {
    if (favorite?.some(car => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favorite, id]);

  const handleOnClickHeart = id => {
    setIsCarFavorite(prev => !prev);
    isCarFavorite
      ? dispatch(removeFavorite(data))
      : dispatch(addFavorite(data));
  };

  const handleClickLearMore = data => {
    dispatch(openModal());
    dispatch(addCar(data));
  };

  return (
    <ItemStyled>
      <ImgWrapper>
        <SvgStyled
          onClick={() => handleOnClickHeart(id)}
          fill={isCarFavorite ? 'rgba(52, 112, 255, 1)' : 'none'}
          stroke={isCarFavorite ? 'rgba(52, 112, 255, 1)' : 'white'}
        >
          <use href={`${sprite}#heart`} />
        </SvgStyled>
        <img src={img} alt="" width="274" height="268" />
      </ImgWrapper>
      <TitleWrapper>
        <Text>
          {make}
          {index < 3 && <Span> {model}</Span>}, {year}
        </Text>

        <Text>{rentalPrice}</Text>
      </TitleWrapper>
      <TextWrapper>
        <Text>{address?.split(',')[1]}</Text>
        <Text>|</Text>
        <Text>{address?.split(',')[2]}</Text>
        <Text>|</Text>
        <Text>{rentalCompany}</Text>
        <Text>|</Text>
        <Text>{type}</Text>
        <Text>|</Text>
        <Text>{model}</Text>
        <Text>|</Text>
        <Text>{mileage}</Text>
        <Text>|</Text>
        <Text>{accessories?.[0]}</Text>
      </TextWrapper>

      <ButtonStyled onClick={() => handleClickLearMore(data)}>
        Learn more
      </ButtonStyled>
    </ItemStyled>
  );
};

export default ItemCar;
