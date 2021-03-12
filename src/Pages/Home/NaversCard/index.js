import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { NaverBox } from './styles';
import { NaversContext } from '../../../context/context';

const NaverCard = ({
  name,
  job_role,
  url,
  id,
  setIsOpenDelete,
  setIsOpenNaver,
}) => {
  const { setTemp_id } = useContext(NaversContext);

  const handleModalDelete = () => {
    setTemp_id(id);
    setIsOpenDelete(true);
  };

  const handleModalNaver = () => {
    setTemp_id(id);
    setIsOpenNaver(true);
  };

  return (
    <NaverBox>
      <div className="photo">
        <img
          src={url}
          alt={`${name} foto`}
          onClick={() => handleModalNaver()}
        />
      </div>
      <p>{name}</p>
      <p>{job_role}</p>

      <button onClick={() => handleModalDelete()}>
        <AiFillDelete />
      </button>

      <Link to={`/naver/edit/${id}`}>
        <MdEdit />
      </Link>
    </NaverBox>
  );
};

export default NaverCard;
