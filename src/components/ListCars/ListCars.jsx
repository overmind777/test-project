import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllCars } from '../../redux/operations';

import { selectCars } from '../../redux/FliterSlice/selectors';
import { selectModal } from '../../redux/ModalSlice/selectors';

import ItemCar from '../ItemCar/ItemCar';
import ModalLearnMore from '../ModalLearnMore/ModalLearnMore';

import { LinkStyled, ListStyled, Wrapper } from './ListCars.styled';

const ListCars = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCars);
  const stateModal = useSelector(selectModal);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllCars({ page: page, limit: 12 }));
  }, [dispatch, page]);

  const handleClickLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Wrapper>
      <ListStyled>
        {items?.map((item, idx) => {
          return <ItemCar data={item} key={idx} index={idx} />;
        })}
      </ListStyled>
      {items?.length === page * 12 ? (
        <LinkStyled onClick={handleClickLoadMore}>Load more</LinkStyled>
      ) : (
        ''
      )}
      {stateModal && <ModalLearnMore />}
    </Wrapper>
  );
};

export default ListCars;
