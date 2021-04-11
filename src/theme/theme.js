import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';
import {darkColors, lightColors} from './colors';
import spacing from './spacing';

const darkTheme = {
  colors: darkColors,
  spacing: spacing,
};

const lightTheme = {
  colors: lightColors,
  spacing: spacing,
};

const Theme = ({children}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
