import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dimensions from '../../theme/dimensions';
import {Body} from '../../theme/typography';

const Root = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.surface};
  border-radius: ${({theme}) => theme.spacing.xs};
  justify-content: space-between;
`;

const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${({theme}) => theme.spacing.s};
`;

const Indicator = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${({theme}) => theme.spacing.xs};
  width: 100%;
  border-bottom-left-radius: ${({theme}) => theme.spacing.xs};
  border-bottom-right-radius: ${({theme}) => theme.spacing.xs};
`;

const Title = styled(Body)`
  margin-top: ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.on};
  text-align: center;
`;

const HomeGridItem = ({title, iconName, onPress, style}) => {
  const theme = useTheme();

  return (
    <Root style={style} onPress={onPress}>
      <ContentContainer>
        <Icon name={iconName} color={theme.colors.on} size={dimensions.l} />
        <Title>{title}</Title>
      </ContentContainer>
      <Indicator />
    </Root>
  );
};

export default HomeGridItem;
