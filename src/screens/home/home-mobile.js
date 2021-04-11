import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../../components';
import HomeGridItems from './home-grid-items';
import HomeListItems from './home-list-items';

const Container = styled.View`
  flex: 1;
`;

const Content = styled.ScrollView`
  flex: 1;
`;

const HomeMobile = () => {
  return (
    <Container>
      <Header leadingIcon="menu" />
      <Content>
        <HomeGridItems />
        <HomeListItems />
      </Content>
    </Container>
  );
};

export default HomeMobile;
