import React from 'react';
import {ListItem} from '../../components';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

const Content = styled.View`
  padding: ${({theme}) => theme.spacing.s};
`;

const DateText = styled.Text`
  color: ${({theme}) => theme.colors.onAlternative};
`;

const ReasonText = styled.Text`
  color: ${({theme}) => theme.colors.onAlternative};
`;

const SolicitudeItem = ({
  style,
  solicitude: {startDate, finishDate, reason},
}) => {
  const theme = useTheme();

  return (
    <ListItem style={style} color={theme.colors.b}>
      <Content>
        <DateText>{`${startDate.getDay()}-${startDate.getMonth()}-${startDate.getFullYear()} - ${finishDate.getDay()}-${finishDate.getMonth()}-${finishDate.getFullYear()}`}</DateText>
        <ReasonText>{reason}</ReasonText>
      </Content>
    </ListItem>
  );
};

export default SolicitudeItem;
