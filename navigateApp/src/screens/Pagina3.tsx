import { View, Button, Text } from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { styles } from '../themes/globalStyles';

export const Pagina3 = ({navigation}: Props) => {
  //Con el metodo pop podemos devolvernos 1 atras o usar popToTop pa devolvernos al inicio y destruye el stack
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina3Screen </Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button title="Ir al Página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
