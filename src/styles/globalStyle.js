import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  outline: none
}

button{
  cursor: pointer;
}

p, span,a, svg ,  h1, h2, h3, label{
  color: rgba(33, 33, 33, 1);

}

.ReactModal__Overlay, .ReactModal__Overlay--after-open{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: rgba(0, 0, 0, .5) !important

}
.ReactModal__Content {
  overflow-y: auto;
}

`;

export default GlobalStyle;
