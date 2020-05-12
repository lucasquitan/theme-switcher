import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('@Application') || 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('@Application', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('@Application', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('@Application');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};