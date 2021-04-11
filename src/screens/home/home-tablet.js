import React from 'react';
import styled from 'styled-components/native';
import {Header} from '../../components';
import HomeGridItems from './home-grid-items';
import HomeListItems from './home-list-items';

const Container = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Col = styled.ScrollView`
  flex: 1;
`;

const HomeTablet = () => {
  return (
    <Container>
      <Header leadingIcon="menu" />
      <Content>
        <Col>
          <HomeGridItems />
        </Col>
        <Col>
          <HomeListItems />
        </Col>
      </Content>
    </Container>
  );
};

export default HomeTablet;
