import React from 'react';
import {StackNavigator} from './src/navigator/StackNavigator';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'; //Envolvemos las las rutas con esto para poder navegar entre ellas

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
}

export default App;
