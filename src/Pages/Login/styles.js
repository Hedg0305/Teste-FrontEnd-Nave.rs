import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  .formBox {
    width: 100%;
    max-width: 448px;
    height: 410px;
    padding: 40px 32px;
    border: 1px solid #212121;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      height: 60px;
      width: 100%;
      max-width: 235px;
      margin-bottom: 40px;
    }

    form {
      width: 100%;

      label {
        font-weight: 600;
        margin-bottom: 4px;
      }

      input {
        border: 1px solid #424242;
        background-color: #ffffff;
        height: 40px;
        width: 100%;
        font-size: 16px;
        padding: 8px;
      }

      span {
        color: red;
        display: block;
        margin-bottom: 10px;
        height: 19px;
      }

      button {
        width: 100%;
        height: 40px;
        background-color: #212121;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        border: none;
        font-weight: 600;
        line-height: 24px;
      }
    }
    a {
      align-self: flex-end;
      margin-top: 12px;
      text-decoration: none;
      font-weight: 600;
    }
  }
`;
