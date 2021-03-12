import React from 'react';
import { LoadingBox } from './styles';
import SpaceShip from '../../assets/spaceship.svg';

const GlobalLoading = () => {
  return (
    <LoadingBox>
      <span className="loadingText">Loading</span>
      <img className="loadingIMG" src={SpaceShip} alt="Loading" />
    </LoadingBox>
  );
};

export default GlobalLoading;
