import React from 'react';
import ListItem from './list-item';
import styled, {useTheme} from 'styled-components/native';
import {Title as TitleText} from '../theme/typography';

const Container = styled.View`
  padding: ${({theme}) => theme.spacing.s};
`;

const Title = styled(TitleText)`
  color: ${({theme}) => theme.colors.f};
`;

const Headline = ({style, title}) => {
  const theme = useTheme();

  return (
    <ListItem style={style} color={theme.colors.f}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </ListItem>
  );
};

export default Headline;
