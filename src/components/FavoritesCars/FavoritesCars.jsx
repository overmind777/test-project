import React from 'react';
import { useSelector } from 'react-redux';

import { favoriteSelector } from '../../redux/Favorite/selectors';
import { selectModal } from '../../redux/ModalSlice/selectors';

import ItemCar from '../ItemCar/ItemCar';
import ModalLearnMore from '../ModalLearnMore/ModalLearnMore';

import { ListStyled, Wrapper } from '../ListCars/ListCars.styled';

const FavoritesCars = () => {
  const { favorite } = useSelector(favoriteSelector);
  const stateModal = useSelector(selectModal);

  return (
    <Wrapper>
      <ListStyled>
        {favorite.length !== 0
          ? favorite?.map((item, idx) => {
              return <ItemCar data={item} key={idx} />;
            })
          : ''}
      </ListStyled>
      {stateModal && <ModalLearnMore />}
    </Wrapper>
  );
};

export default FavoritesCars;
