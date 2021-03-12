import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  width: 100%;
  max-width: 592px;
  padding: 29px;
  display: flex;
  flex-direction: column;
  background-color: white;

  h1 {
    margin-top: -5px;
    margin-bottom: 24px;
    font-weight: 600;
  }
  p {
  }
  button {
    border: none;
    font-size: 14px;
    align-self: flex-end;
    background-color: white;
  }
`;
