import React from 'react';
import Screen from '../../responsive/responsive-screen';
import AddSolicitudeMobile from './add-solicitude-mobile';

const AddSolicitude = () => {
  return <Screen mobile={<AddSolicitudeMobile />} />;
};

export default AddSolicitude;
