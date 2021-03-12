import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Wrapper } from './styles';

import { postNaver } from '../../services/api';
import { naverSchema } from '../../helpers/validators/schemas';

import GlobalModal from '../../components/GlobalModal';
import GlobalHeader from '../../components/GlobalHeader';

const AddNaver = () => {
  const [globalModal, setGlobalModal] = useState(false);
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(naverSchema),
  });
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await postNaver(data);
      setGlobalModal(true);
    } catch (error) {
      toast.error('🚀 Falha ao criar naver!', {
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

  const closeModal = () => {
    setGlobalModal(false);
    history.push('/home');
  };

  return (
    <Wrapper>
      <GlobalHeader />
      <div className="formBox">
        <div className="upperBar">
          <Link to="/home">
            <IoIosArrowBack />
          </Link>
          <h2>Adicionar Naver</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                ref={register()}
              />
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
              />
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
              />
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
              />
              <span>{errors.url?.message}</span>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
      <GlobalModal
        IsOpen={globalModal}
        closeModal={closeModal}
        title="Naver criado"
        message="Naver criado com seucesso"
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

export default AddNaver;
