/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState } from 'react';

export const NaversContext = createContext({});

export const NaversProvider = (props) => {
  const [navers, setNavers] = useState(null);
  const [temp_id, setTemp_id] = useState(null);

  return (
    <NaversContext.Provider value={{ navers, setNavers, temp_id, setTemp_id }}>
      {props.children}
    </NaversContext.Provider>
  );
};
