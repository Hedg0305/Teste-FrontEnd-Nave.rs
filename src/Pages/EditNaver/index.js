import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalModal from '../../components/GlobalModal';
import GlobalLoading from '../../components/GlobalLoading';
import GlobalHeader from '../../components/GlobalHeader';

import { Wrapper } from './styles';

import { updateNaver } from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { showNaver } from '../../services/api';
import { naverSchema } from '../../helpers/validators/schemas';

const EditNaver = () => {
  const [globalModal, setGlobalModal] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const [naver, setNaver] = useState(null);
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(naverSchema),
  });

  useEffect(() => {
    const fetchNaver = async (id) => {
      try {
        const { data } = await showNaver(id);
        const formatedNAver = {
          ...data,
          birthdate: formatDate(data.birthdate),
          admission_date: formatDate(data.admission_date),
        };
        setNaver(formatedNAver);
      } catch (error) {}
    };

    fetchNaver(id);
  }, [id]);

  const closeModal = () => {
    setGlobalModal(false);
    history.push('/home');
  };

  const onSubmit = async (data) => {
    try {
      await updateNaver(id, data);
      setGlobalModal(true);
    } catch (naver) {
      toast.error('🚀 Falha ao editar naver!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <Wrapper>
      <GlobalHeader />
      <div className="formBox">
        <div className="upperBar">
          <Link to="/home">
            <IoIosArrowBack />
          </Link>
          <h2>Editar Naver</h2>
        </div>
        {naver ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome"
                  defaultValue={naver.name}
                  ref={register()}
                ></input>
                <span>{errors.name?.message}</span>

                <label htmlFor="birthdate">Nascimento</label>
                <Controller
                  as={InputMask}
                  control={control}
                  mask="99/99/9999"
                  id="birthdate"
                  name="birthdate"
                  type="text"
                  placeholder="Idade"
                  defaultValue={naver.birthdate}
                  ref={register()}
                />
                <span>{errors.birthdate?.message}</span>

                <label htmlFor="project">Projetos que participou</label>
                <input
                  id="project"
                  name="project"
                  type="text"
                  placeholder="Projeots que participou"
                  ref={register()}
                  defaultValue={naver.project}
                ></input>
                <span>{errors.project?.message}</span>
              </div>
              <div>
                <label htmlFor="job_role">Cargo</label>
                <input
                  id="job_role"
                  name="job_role"
                  type="text"
                  placeholder="Cargo"
                  ref={register()}
                  defaultValue={naver.job_role}
                ></input>
                <span>{errors.job_role?.message}</span>

                <label htmlFor="admission_date">Data da admissão</label>
                <Controller
                  as={InputMask}
                  control={control}
                  mask="99/99/9999"
                  id="admission_date"
                  name="admission_date"
                  type="text"
                  placeholder="Tempo de empresa"
                  defaultValue={naver.admission_date}
                  ref={register()}
                />
                <span>{errors.admission_date?.message}</span>

                <label htmlFor="url">URL da foto do Naver</label>
                <input
                  id="url"
                  name="url"
                  type="text"
                  placeholder="URL da foto do Naver"
                  ref={register()}
                  defaultValue={naver.url}
                ></input>
                <span>{errors.url?.message}</span>
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        ) : (
          <GlobalLoading />
        )}
      </div>

      <GlobalModal
        IsOpen={globalModal}
        closeModal={closeModal}
        title="Naver atualizado"
        message="Naver atualizado com seucesso"
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

export default EditNaver;
