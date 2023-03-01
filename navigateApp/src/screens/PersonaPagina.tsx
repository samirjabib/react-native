import {View, Text} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useEffect } from 'react';
import { styles } from '../themes/globalStyles';


interface Props extends NativeStackScreenProps<RootStackParams, 'PaginaPersona'> {} //Tipamos nuestras props de los metodos de react nativae

export const PaginaPersona = ({ route, navigation}: Props ) => {
  
    // const params = route.params as RouterParams;
    const params = route.params;

    useEffect( () => {

        navigation.setOptions({
            title: params.nombre
        })

    },[])

  return (
    <View style={ styles.globalMargin }>
    <Text style={ styles.title }>
        {
            JSON.stringify( params, null, 3 )
        }

    </Text>
</View>
  );
};
