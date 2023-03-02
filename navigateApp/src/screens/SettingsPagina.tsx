import {View, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsPagina = () => {

  const inserts = useSafeAreaInsets() //Nos permite cuadrar la pantalla para visualizar las cosas de manera segura. 

  return (
    <View style={{marginTop:inserts.top}}>
      <Text style={{fontSize:30, color:'black'}}>hola</Text>
    </View>
  );
};
