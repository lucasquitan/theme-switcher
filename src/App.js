import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/Global';
import { darkTheme, lightTheme } from './style/Theme';

import Toggle from './components/Toggle';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
