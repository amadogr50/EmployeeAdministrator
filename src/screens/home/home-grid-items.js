import React from 'react';
import styled from 'styled-components/native';
import HomeGridItem from './home-grid-item';
import ToggleThemeGridItem from './toggle-theme-grid-item';
import ROUTES from '../../navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from 'styled-components/native/dist/styled-components.native.esm';

const Row = styled.View`
  flex-direction: row;
  margin-horizontal: ${({theme}) => theme.spacing.xs};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const StyleHomeItem = styled(HomeGridItem)`
  flex: 1;
  margin-horizontal: ${({theme}) => theme.spacing.xs};
`;

const ToggleThemeItem = styled(ToggleThemeGridItem)`
  flex: 1;
  margin-horizontal: ${({theme}) => theme.spacing.xs};
`;

const HomeGridItems = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const onSchedulePress = () => {
    navigation.navigate(ROUTES.SCHEDULE);
  };

  const onAddSolicitudePress = () => {
    navigation.navigate(ROUTES.ADD_SOLICITUDES);
  };

  return (
    <>
      <Row>
        <StyleHomeItem iconName="plus" title={'Registrar Marcación'} />
        <StyleHomeItem
          iconName="clock-outline"
          title={'Registrar Horarios'}
          onPress={onSchedulePress}
        />
        <StyleHomeItem iconName="av-timer" title={'Historial Marcación'} />
      </Row>
      <Row>
        <StyleHomeItem
          iconName="form-dropdown"
          title={'Solicitudes RRHH'}
          onPress={onAddSolicitudePress}
        />
        <StyleHomeItem iconName="form-select" title={'Formularios'} />
        <StyleHomeItem iconName="heart" title={'Bitácora de Salud'} />
      </Row>
      <Row>
        <StyleHomeItem iconName="qrcode" title={'Opciones QR'} />
        <StyleHomeItem iconName="help" title={'Ayuda'} />
        <ToggleThemeItem />
      </Row>
    </>
  );
};

export default HomeGridItems;
