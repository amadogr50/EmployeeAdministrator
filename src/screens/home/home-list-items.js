import React from 'react';
import {useNavigation} from '@react-navigation/core';
import styled, {useTheme} from 'styled-components/native';
import {useSelector} from 'react-redux';
import ROUTES from '../../navigation/routes';
import HomeListItem from './home-list-item';

const StyledHomeListItem = styled(HomeListItem)`
  margin-horizontal: ${({theme}) => theme.spacing.s};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const HomeListItems = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const solicitudes = useSelector(state => state.solicitudes);

  const onSolicitudesPress = () => {
    navigation.navigate(ROUTES.SOLICITUDES);
  };

  return (
    <>
      <StyledHomeListItem
        color={theme.colors.b}
        title={'Solicitudes'}
        counter={solicitudes.length}
        onPress={onSolicitudesPress}
      />
    </>
  );
};

export default HomeListItems;
