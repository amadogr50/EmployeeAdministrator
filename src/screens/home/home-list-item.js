import React from 'react';
import ListItem from '../../components/list-item';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {Title} from '../../theme/typography';

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${({theme}) => theme.spacing.s};
  padding-vertical: ${({theme}) => theme.spacing.m};
`;

const StyledTitle = styled(Title)`
  color: ${({theme}) => theme.colors.on};
`;

const Counter = styled(Title)`
  color: ${({color}) => color};
`;

const HomeListItem = ({onPress, title, counter, color, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItem style={style} color={color}>
        <Content>
          <StyledTitle>{title}</StyledTitle>
          <Counter color={color}>{counter}</Counter>
        </Content>
      </ListItem>
    </TouchableOpacity>
  );
};

export default HomeListItem;
