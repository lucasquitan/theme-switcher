import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: 'border-box';

  body {    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;    
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  button:focus {
  outline: none;
  box-shadow: none;
}
`;
