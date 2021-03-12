/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Wrapper } from './styles';
import logo from '../../assets/logo.svg';

import GlobalModal from '../../components/GlobalModal';

import { signIn } from '../../services/api';
import { getToken, login } from '../../services/auth';
import { loginSchema } from '../../helpers/validators/schemas';

const Login = ({ history }) => {
  const [globalModal, setGlobalModal] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    const token = getToken();
    if (token) {
      history.push('/home');
    }
  }, []);

  const onSubmit = async (formData) => {
    try {
      const { data } = await signIn(formData);
      login(data.token);
      history.push('/home');
    } catch (err) {
      setGlobalModal(true);
    }
  };

  const closeModal = () => {
    setGlobalModal(false);
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

          <button type="submit">Entrar</button>
        </form>
        <Link to="/signup">Crie uma conta</Link>
      </div>

      <GlobalModal
        IsOpen={globalModal}
        closeModal={closeModal}
        title="Parece que temos um problema"
        message="Usuário ou senha inválido!"
      />
    </Wrapper>
  );
};

export default Login;
