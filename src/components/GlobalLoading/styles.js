import styled from 'styled-components';

export const LoadingBox = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  .loadingText {
    font-size: 24px;
  }
  .loadingIMG {
    margin-left: 30px;
    width: 50px;
    animation: MoveUpDown 1.5s linear infinite;
    position: relative;
  }
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: -10px;
    }
    50% {
      bottom: 10px;
    }
  }
`;
