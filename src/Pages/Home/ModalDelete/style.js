import styled from 'styled-components';
import ReactModal from 'react-modal';

export const DeleteModal = styled(ReactModal)`
  padding: 32px;
  background-color: white;

  h1 {
    margin-bottom: 24px;
    font-weight: 600;
  }
  p {
    margin-bottom: 33px;
  }
  div {
    margin-left: 152px;

    button {
      border: 1px solid #212121;
      width: 176px;
      height: 40px;
      font-weight: 600;
      cursor: pointer;
      background-color: white;
    }

    button + button {
      margin-left: 24px;
      background-color: #212121;
      color: white;
    }
  }

  @media (max-width: 660px) {
    div {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      button + button {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
`;
