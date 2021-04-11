import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import React from 'react';
import Navigator from './src/navigation/navigator';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Theme from './src/theme/theme';

enableScreens();

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Theme>
      <Navigator />
    </Theme>
  </Provider>
);

export default App;
