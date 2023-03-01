import { View, Text, Button } from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';



export const Pagina2 = () => {

  const navigator = useNavigation() // Con este hook podemos ir a la pagina que queramos. 

  return (
    <View>
      <Button onPress={() =>  navigator.navigate('Pagina3')} title={'ir a pagina 2'} />
    </View>
  );
};
