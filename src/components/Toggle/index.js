import React from 'react';
import { func, string } from 'prop-types';
//import styled from 'styled-components';
import {ReactComponent as MoonIcon} from '../../icons/moon.svg'; 
import {ReactComponent as SunIcon} from '../../icons/sun.svg';

import { ToggleContainer as Container } from './styles';

function Toggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';
  return (
    <Container onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </Container>
  );
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;