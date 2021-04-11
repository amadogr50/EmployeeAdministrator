import React from 'react';
import {FlatList, View} from 'react-native';
import {HeaderBack, Headline} from '../../components';
import {useSelector} from 'react-redux';
import SolicitudeItem from './solicitude-item';
import styled from 'styled-components/native';

const Item = styled(SolicitudeItem)`
  margin-horizontal: ${({theme}) => theme.spacing.s};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const StyledHeadline = styled(Headline)`
  margin-horizontal: ${({theme}) => theme.spacing.s};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const SolicitudesMobile = () => {
  const solicitudes = useSelector(state => state.solicitudes);

  return (
    <View>
      <HeaderBack />
      <FlatList
        data={solicitudes}
        ListHeaderComponent={<StyledHeadline title="Solicitudes" />}
        keyExtractor={item =>
          `${item.startDate.getTime()}-${item.finishDate.getTime()}`
        }
        renderItem={({item}) => <Item solicitude={item} />}
      />
    </View>
  );
};

export default SolicitudesMobile;
