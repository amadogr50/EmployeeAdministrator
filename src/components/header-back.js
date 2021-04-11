import React from 'react';
import Header from './header';
import {useNavigation} from '@react-navigation/core';

const HeaderBack = () => {
  const navigation = useNavigation();

  const onLeadingIconPress = () => {
    navigation.goBack();
  };

  return (
    <Header
      leadingIcon="chevron-left"
      onLeadingIconPress={onLeadingIconPress}
    />
  );
};

export default HeaderBack;
