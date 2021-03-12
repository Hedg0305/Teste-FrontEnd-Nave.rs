import styled from 'styled-components';

export const NaverBox = styled.div`
  max-width: 281px;
  width: 100%;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 280px;
    cursor: pointer;
    filter: grayscale(100%);
  }

  p {
    font-weight: 600;
    margin-top: 12px;
  }

  p + p {
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 12px;
  }

  button {
    border: none;
    height: 16px;
    width: 16px;
    font-size: 18px;
    cursor: pointer;
    margin-right: 16px;
    background-color: white;
  }
  a {
    font-size: 18px;
  }
`;
