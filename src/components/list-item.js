import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  background-color: ${({theme}) => theme.colors.surface};
  border-radius: ${({theme}) => theme.spacing.xs};
  flex-direction: row;
`;

const Indicator = styled.View`
  height: 100%;
  width: ${({theme}) => theme.spacing.xs};
  background-color: ${({color}) => color};
  border-top-left-radius: ${({theme}) => theme.spacing.xs};
  border-bottom-left-radius: ${({theme}) => theme.spacing.xs};
`;

const Content = styled.View`
  flex: 1;
`;

const ListItem = ({style, color, children}) => {
  return (
    <Root style={style}>
      <Indicator color={color} />
      <Content>{children}</Content>
    </Root>
  );
};

export default ListItem;
