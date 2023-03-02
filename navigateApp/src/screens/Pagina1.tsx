import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {styles} from '../themes/globalStyles';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {} //Tipamos nuestro drawer

export const Pagina1 = ({navigation}: Props) => {
  //desestructuramos el componente navigation que nos trae varios metodos.

 useEffect( () => {
  //De esta manera podemos agregar el menu en la parte del header que nosotros queramos
  navigation.setOptions ({
    headerLeft: () => (
      <Button title='Home' onPress={() => navigation.toggleDrawer()}/>
    )
  })
  
 }, [])

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
