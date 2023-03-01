import { View, Button } from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae
import {NativeStackScreenProps} from '@react-navigation/native-stack';




export const Pagina3 = ({ navigation } :Props ) => {

  //Con el metodo pop podemos devolvernos 1 atras o usar popToTop pa devolvernos al inicio y destruye el stack
  return (
    <View>
    <Button onPress={() => navigation.popToTop()} title={'ir al home'} />
  </View>
  );
};
