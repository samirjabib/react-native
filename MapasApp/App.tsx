import Icon from 'react-native-vector-icons/Ionicons';

import {enableLatestRenderer} from 'react-native-maps';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { store, persistor } from './src/store/store';
enableLatestRenderer();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
