import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ROUTES from './routes';
import React from 'react';
import {Home, AddSolicitude, Schedule, Solicitudes} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={ROUTES.HOME} component={Home} />
    <Stack.Screen name={ROUTES.ADD_SOLICITUDES} component={AddSolicitude} />
    <Stack.Screen name={ROUTES.SOLICITUDES} component={Solicitudes} />
    <Stack.Screen name={ROUTES.SCHEDULE} component={Schedule} />
  </Stack.Navigator>
);

export default MainNavigator;
