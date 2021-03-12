import React, { useContext } from 'react';

import { DeleteModal } from './style';
import { NaversContext } from '../../../context/context';

const ModalDelete = ({ IsOpenDelete, setIsOpenDelete, handleDelete }) => {
  const { temp_id } = useContext(NaversContext);

  return (
    <DeleteModal
      isOpen={IsOpenDelete}
      onRequestClose={() => setIsOpenDelete(false)}
      ariaHideApp={false}
    >
      <h1>Excluir Naver</h1>
      <p>Tem certeza que deseja excluir este Naver?</p>

      <div>
        <button onClick={() => setIsOpenDelete(false)}>Cancelar</button>
        <button onClick={() => handleDelete(temp_id)}>Excluir</button>
      </div>
    </DeleteModal>
  );
};

export default ModalDelete;
