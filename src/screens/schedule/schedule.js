import React from 'react';
import Screen from '../../responsive/responsive-screen';
import ScheduleMobile from './schedule-mobile';

const Schedule = () => {
  return <Screen mobile={<ScheduleMobile />} />;
};

export default Schedule;
