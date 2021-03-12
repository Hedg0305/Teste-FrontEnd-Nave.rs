import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Wrapper } from './styles';
import logo from '../../assets/logo.svg';

import { signUp } from '../../services/api';

import GlobalModal from '../../components/GlobalModal';
import { signUpSchema } from '../../helpers/validators/schemas';

const CreateAccount = () => {
  const [globalModal, setGlobalModal] = useState(false);
  const [status, setStatus] = useState();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const response = await signUp({ email, password });
      console.log(response);
      setStatus(response.status);
      setGlobalModal(true);
    } catch (error) {
      setGlobalModal(true);
    }
  };

  const closeModal = () => {
    setGlobalModal(false);
    if (status === 200) history.push('/');
  };

  return (
    <Wrapper className="main">
      <div className="formBox">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            ref={register()}
          ></input>
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            ref={register()}
          ></input>
          <span>{errors.password?.message}</span>

          <label htmlFor="confirmPassword">Confirme a senha</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirme a senha"
            ref={register({ required: true })}
          ></input>
          <span>{errors.confirmPassword?.message}</span>

          <button>Criar conta</button>
        </form>
        <Link to="/">Voltar</Link>
      </div>

      <GlobalModal
        IsOpen={globalModal}
        closeModal={closeModal}
        title={status === 200 ? 'Conta criada' : 'Parece que temos um problema'}
        message={
          status === 200
            ? 'Conta criada com sucesso!'
            : 'Este usuário já está cadastrado!'
        }
      />
    </Wrapper>
  );
};

export default CreateAccount;
