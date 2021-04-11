import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dimensions from '../theme/dimensions';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme}) => theme.spacing.s};
`;

const Button = styled.TouchableOpacity``;

const Header = ({leadingIcon, onLeadingIconPress, style}) => {
  const theme = useTheme();

  return (
    <Container style={style}>
      <Button onPress={onLeadingIconPress}>
        <Icon name={leadingIcon} size={dimensions.l} color={theme.colors.on} />
      </Button>
      <Button>
        <Icon name="account" size={dimensions.l} color={theme.colors.on} />
      </Button>
    </Container>
  );
};

export default Header;
