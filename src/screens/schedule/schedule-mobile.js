import React from 'react';
import {FlatList, View} from 'react-native';
import {HeaderBack, Headline} from '../../components';
import ScheduleItem from './schedule-item';
import styled from 'styled-components/native';

const schedules = [
  {day: 'L', schedule: '08:00-17:00'},
  {day: 'M', schedule: '08:00-17:00'},
  {day: 'Mi', schedule: '08:00-17:00'},
  {day: 'J', schedule: '08:00-17:00'},
  {day: 'V', schedule: '08:00-17:00'},
  {day: 'S', schedule: '08:00-12:00'},
  {day: 'D', schedule: 'LIBRE'},
];

const Container = styled.View`
  flex: 1;
`;

const Item = styled(ScheduleItem)`
  margin-horizontal: ${({theme}) => theme.spacing.s};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const StyledHeadline = styled(Headline)`
  margin-horizontal: ${({theme}) => theme.spacing.s};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const ScheduleMobile = () => {
  return (
    <Container>
      <HeaderBack />
      <FlatList
        data={schedules}
        keyExtractor={item => item.day}
        ListHeaderComponent={<StyledHeadline title="Horarios" />}
        renderItem={({item}) => (
          <Item day={item.day} schedule={item.schedule} />
        )}
      />
    </Container>
  );
};

export default ScheduleMobile;
