import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 24px 32px;

  .upperBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    h1 {
      font-weight: 600;
      font-size: 40px;
    }

    a {
      height: 40px;
      width: 176px;
      background-color: rgba(33, 33, 33, 1);
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .navers {
    place-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media (max-width: 450px) {
    .upperBar {
      flex-direction: column;

      a {
        margin-top: 20px;
      }
    }
  }
`;
