import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './main-navigator';
import {useTheme} from 'styled-components';

const Navigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        colors: theme.colors,
      }}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
