import {compose, createStore} from 'redux';
import reactotron from '../../reactotron-config';

import reducers from './reducers';

const configureStore = () => {
  const store = createStore(reducers, compose(reactotron.createEnhancer()));
  return store;
};

export default configureStore;
