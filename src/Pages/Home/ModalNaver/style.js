import styled from 'styled-components';
import ReactModal from 'react-modal';

export const NaverModal = styled(ReactModal)`
  width: 100%;
  max-width: 1006px;
  height: 504px;
  display: flex;
  background-color: white;

  .photo {
    width: 503px;
    height: 504px;

    img {
      width: 100%;
      height: 100%;
      filter: grayscale(100%);
    }
  }

  .info {
    width: 50%;
    padding: 21px;
    display: flex;
    flex-direction: column;

    .closeButton {
      border: none;
      font-size: 14px;
      align-self: flex-end;
      background: transparent;
    }

    h1 {
      font-size: 24px;
    }

    p:nth-child(odd) {
      font-weight: 600;
      margin-bottom: 24px;
      margin-top: 10px;
    }

    p:nth-of-type(1) {
      font-weight: 400;
    }

    .buttons {
      margin-top: 100px;

      button {
        margin-right: 16px;
        border: none;
        font-size: 20px;
        background-color: white;
      }

      a {
        font-size: 20px;
      }
    }
  }
  .loading {
    margin: 0 auto;
    align-self: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    width: 300px;
    height: 500px;
    .photo {
      width: 100%;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      width: 100%;
      padding: 21px;
      display: flex;
      flex-direction: column;
      .closeButton {
        position: relative;
        top: -300px;
      }
      .buttons {
        margin-top: 30px;
      }
    }
    .loading {
      align-self: center;
      margin-top: 200px;
    }
  }
`;
