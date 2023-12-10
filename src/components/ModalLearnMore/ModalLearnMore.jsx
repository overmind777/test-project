import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import sprite from '../../images/sprite.svg';

import { closeModal } from '../../redux/ModalSlice/modalSlice';
import Modal from '../Modal/Modal';

import { CloseButton, Wrapper, WrapperModal } from './ModalLearnMore.styled';

const ModalLearnMore = () => {
  const dispatch = useDispatch();

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const handleClickClose = () => {
    dispatch(closeModal());
  };

  return (
    <Wrapper onClick={() => dispatch(closeModal())}>
      <WrapperModal>
        <CloseButton onClick={handleClickClose}>
          <use href={`${sprite}#x`} />
        </CloseButton>
        <Modal />
      </WrapperModal>
    </Wrapper>
  );
};

export default ModalLearnMore;
