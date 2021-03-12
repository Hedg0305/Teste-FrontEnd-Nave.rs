import React from 'react';
import { Modal } from './style';
import { GrClose } from 'react-icons/gr';

const GlobalModal = ({ IsOpen, closeModal, title, message }) => {
  return (
    <Modal
      isOpen={IsOpen}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
    >
      <button onClick={() => closeModal()}>
        <GrClose />
      </button>
      <h1>{title}</h1>
      <p>{message}</p>
    </Modal>
  );
};

export default GlobalModal;
