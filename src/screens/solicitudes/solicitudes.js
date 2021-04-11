import React from 'react';
import Screen from '../../responsive/responsive-screen';
import SolicitudesMobile from './solicitudes-mobile';

const Solicitudes = () => {
  return <Screen mobile={<SolicitudesMobile />} />;
};

export default Solicitudes;
