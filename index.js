/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';  // Import Provider
import store from './store/store';  // Import your Redux store

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
