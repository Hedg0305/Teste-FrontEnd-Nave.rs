import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { Header } from './styles';
import { logout } from '../../services/auth';

const GlobalHeader = () => {
  return (
    <Header>
      <Link to="/home">
        <img src={logo} alt="Logo nave" />
      </Link>
      <Link to="/" onClick={logout}>
        Sair
      </Link>
    </Header>
  );
};

export default GlobalHeader;
