import {View, Text, StyleSheet, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae

export const Pagina1 = ({navigation}: Props) => {
  //desestructuramos el componente navigation que nos trae varios metodos.

  const navigator = () => {
    navigation.navigate('Pagina2'); //Le pasamos exactamente el mismo nombre de la ruta
  };

  return (
    <View>
      <Button onPress={navigator} title={'ir a pagina 2'} />
    </View>
  );
};

