import React from 'react';
import styled from 'styled-components/native';
import ListItem from '../../components/list-item';
import {useTheme} from 'styled-components';
import {Title} from '../../theme/typography';

const Container = styled.View`
  flex-direction: row;
`;

const Day = styled.View`
  background-color: ${({theme}) => theme.colors.surface};
  border-radius: ${({theme}) => theme.spacing.xs};
  margin-right: ${({theme}) => theme.spacing.s};
  padding: ${({theme}) => theme.spacing.s};
`;

const DayTitle = styled(Title)`
  color: ${({theme}) => theme.colors.onAlternative};
`;

const StyledListItem = styled(ListItem)`
  flex: 1;
`;

const ListContentContainer = styled.View`
  padding: ${({theme}) => theme.spacing.s};
`;

const ScheduleTitle = styled(Title)`
  color: ${({theme}) => theme.colors.onAlternative};
  flex: 1;
  text-align: center;
`;

const ScheduleItem = ({style, day, schedule}) => {
  const theme = useTheme();

  return (
    <Container style={style}>
      <Day>
        <DayTitle>{day}</DayTitle>
      </Day>
      <StyledListItem color={theme.colors.primary}>
        <ListContentContainer>
          <ScheduleTitle>{schedule}</ScheduleTitle>
        </ListContentContainer>
      </StyledListItem>
    </Container>
  );
};

export default ScheduleItem;
