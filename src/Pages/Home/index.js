import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Wrapper } from './styles';
import NaverCard from './NaversCard';
import ModalNaver from './ModalNaver';
import ModalDelete from './ModalDelete';

import GlobalModal from '../../components/GlobalModal';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalLoading from '../../components/GlobalLoading';

import { NaversContext } from '../../context/context';
import { loadNavers, deletNaver } from '../../services/api';

const Home = () => {
  const [globalModal, setGlobalModal] = useState(false);
  const [IsOpenDelete, setIsOpenDelete] = useState(false);
  const [IsOpenNaver, setIsOpenNaver] = useState(false);
  const { navers, setNavers } = useContext(NaversContext);

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const { data } = await loadNavers();
        setNavers(data);
      } catch (error) {
        toast.error('🚀 Falha ao carregar os navers!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        setNavers([]);
      }
    };

    fetchNavers();
  }, [setNavers]);

  const closeModal = () => {
    setGlobalModal(false);
  };

  const handleDelete = async (temp_id) => {
    try {
      await deletNaver(temp_id);
      setIsOpenDelete(false);
      setGlobalModal(true);
      setNavers(navers.filter((iten) => iten.id !== temp_id));
    } catch (error) {
      toast.error('🚀 Falha ao deletar naver!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      setIsOpenDelete(false);
    }
  };

  return (
    <Wrapper>
      <GlobalHeader />
      <div className="upperBar">
        <h1>Navers</h1>
        <Link to="/naver/create">Adicionar um Naver</Link>
      </div>

      <div className="navers">
        {navers ? (
          navers.map(({ name, job_role, url, id }) => {
            return (
              <NaverCard
                id={id}
                key={id}
                url={url}
                name={name}
                job_role={job_role}
                setIsOpenNaver={setIsOpenNaver}
                setIsOpenDelete={setIsOpenDelete}
              />
            );
          })
        ) : (
          <GlobalLoading />
        )}
      </div>

      <ModalNaver
        IsOpenNaver={IsOpenNaver}
        setIsOpenNaver={setIsOpenNaver}
        setIsOpenDelete={setIsOpenDelete}
      />

      <ModalDelete
        IsOpenDelete={IsOpenDelete}
        handleDelete={handleDelete}
        setIsOpenDelete={setIsOpenDelete}
      />

      <GlobalModal
        IsOpen={globalModal}
        closeModal={closeModal}
        title="Naver excluído"
        message="Naver excluido com seucesso!"
      />
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
    </Wrapper>
  );
};

export default Home;
