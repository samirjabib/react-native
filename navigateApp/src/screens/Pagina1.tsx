import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../themes/globalStyles';

interface Props extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae

export const Pagina1 = ({navigation}: Props) => {
  //desestructuramos el componente navigation que nos trae varios metodos.

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen </Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          color: 'black',
        }}>
        {' '}
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PaginaPersona', {
              id: 1,
              nombre: 'Samir',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Juan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PaginaPersona', {
              id: 2,
              nombre: 'Juan',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Samir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
