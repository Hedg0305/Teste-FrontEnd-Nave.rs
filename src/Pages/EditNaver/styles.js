import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 24px 32px;

  .formBox {
    max-width: 592px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .upperBar {
      margin-bottom: 32px;
      display: flex;
      align-items: center h2 {
        font-weight: 600;
        font-size: 24px;
        display: inline-block;
      }

      a {
        margin-right: 23px;
        font-size: 24px;

        svg {
          height: 100%;
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;

      .inputs {
        display: flex;
        justify-content: space-between;
      }

      label {
        display: block;
        font-weight: 600;
        margin-bottom: 4px;
      }

      input {
        height: 40px;
        width: 280px;
        padding: 8px;
        border: 1px solid rgba(66, 66, 66, 1);
      }
      span {
        color: red;
        display: block;
        margin-bottom: 10px;
        height: 19px;
      }

      button {
        align-self: flex-end;
        height: 40px;
        width: 176px;
        background-color: rgba(33, 33, 33, 1);
        color: #fff;
        border: none;
        cursor: pointer;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 700px) {
    form {
      width: 280px;
      margin: 0 auto;

      button {
        margin: 0 auto;
      }
    }

    .inputs {
      flex-direction: column;
    }
  }
`;
