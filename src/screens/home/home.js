import React from 'react';
import Screen from '../../responsive/responsive-screen';
import HomeMobile from './home-mobile';
import HomeTablet from './home-tablet';

const Home = () => {
  return <Screen mobile={<HomeMobile />} tablet={<HomeTablet />} />;
};

export default Home;
