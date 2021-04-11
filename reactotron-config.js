import AsyncStorage from '@react-native-community/async-storage';
import Reactotron, {asyncStorage} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(asyncStorage())
  .use(reactotronRedux())
  .connect();

export default reactotron;
