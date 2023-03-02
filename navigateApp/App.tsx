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
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

function App(): JSX.Element {
  return (
      <NavigationContainer
      
      >
       <MenuLateral/>
      </NavigationContainer>
  );
}

export default App;
