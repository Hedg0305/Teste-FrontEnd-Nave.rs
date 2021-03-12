/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NaverModal } from './style';
import ModalDelete from '../ModalDelete';

import GlobalLoading from '../../../components/GlobalLoading';

import { NaversContext } from '../../../context/context';
import { showNaver } from '../../../services/api';
import { getAge } from '../../../utils/formatDate';

const ModalNaver = ({ IsOpenNaver, setIsOpenNaver, setIsOpenDelete }) => {
  const { temp_id, setTemp_id } = useContext(NaversContext);
  const [naver, setNaver] = useState();

  useEffect(() => {
    const fetchNaver = async (id) => {
      try {
        const { data } = await showNaver(id);
        const formatedNAver = {
          ...data,
          birthdate: getAge(data.birthdate),
          admission_date: getAge(data.admission_date),
        };
        setNaver(formatedNAver);
      } catch (error) {
        toast.error('🚀 Falha ao buscar naver!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        setIsOpenDelete(setIsOpenNaver(false));
      }
    };

    if (temp_id) fetchNaver(temp_id);
  }, [IsOpenNaver]);

  const handleModalDelete = () => {
    setIsOpenNaver(false);
    setIsOpenDelete(true);
  };

  return (
    <div>
      <NaverModal
        isOpen={IsOpenNaver}
        onRequestClose={() => {
          setNaver(null);
          setTemp_id(null);
          setIsOpenNaver(false);
        }}
        ariaHideApp={false}
      >
        {naver ? (
          <>
            <div className="photo">
              <img src={naver.url} alt={naver.name} />
            </div>

            <div className="info">
              <button
                className="closeButton"
                onClick={() => setIsOpenNaver(false)}
              >
                <GrClose />
              </button>

              <h1>{naver.name}</h1>
              <p>{naver.job_role}</p>
              <p>Idade</p>
              <p>{naver.birthdate} anos</p>
              <p>Tempo de empresa</p>
              <p>
                {naver.admission_date > 1
                  ? naver.admission_date + ' anos'
                  : naver.admission_date + ' ano'}
              </p>
              <p>Projetos que participou</p>
              <p>{naver.project}</p>

              <div className="buttons">
                <button onClick={() => handleModalDelete()}>
                  <AiFillDelete />
                </button>

                <Link to={`/naver/edit/${temp_id}`}>
                  <MdEdit />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <GlobalLoading />
          </div>
        )}
        <ModalDelete />
      </NaverModal>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </div>
  );
};

export default ModalNaver;
