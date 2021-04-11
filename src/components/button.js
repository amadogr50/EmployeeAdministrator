import React from 'react';
import styled from 'styled-components/native';
import {Title as TitleText} from '../theme/typography';

const Container = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.s};
  border-radius: ${({theme}) => theme.spacing.xs};
`;

const Title = styled(TitleText)`
  text-align: center;
  color: ${({theme}) => theme.colors.on};
`;

const Button = ({onPress, title, style}) => {
  return (
    <Container style={style} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
