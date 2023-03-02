import {StackNavigator} from './StackNavigator';
import {SettingsPagina} from '../screens/SettingsPagina';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator(); //CREAMOS EL SIDEBAR

// const Stack = createNativeStackNavigator() //De esta manera podemos usar el Sidebar en diferentes Screen pasando el stack al principal
// const SettingsStackScreen = () => {
//         return(
//             <Stack.Navigator>
//                 <Stack.Screen name="SettingStack" component={SettingsPagina}/>
//             </Stack.Navigator>
//         )
// }

export const MenuLateral = () => {
  const dimensions = useWindowDimensions(); //Sacamos las dimensiones de la pantalla para cambiar la posicion del nav dependiendo de la resolucion

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        headerShown: false, //Ocultamos el header que viene con navigator
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <MenuInterno {...props} />
      )} //enviamos mediante props
    >
      {/* Podemos cambiar el nombre que se muestra con la propiedad title  */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsPagina" component={SettingsPagina} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  //Extraemos el navigation de props.

  return (
    <DrawerContentScrollView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{
            //Image nos trae varias propiedaes uri nos sirve para invocar imagenes http
            uri: 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png',
          }}
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
          }}
        />
      </View>

      <View style={{backgroundColor: 'red'}}>
        <TouchableOpacity
          style={{marginVertical: 30, marginHorizontal: 30}}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={{fontSize: 20, borderWidth: 4, color: 'black'}}>
            Navegacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginVertical: 30, marginHorizontal: 30}}
          onPress={() => navigation.navigate('SettingsPagina')}>
          <Text style={{fontSize: 20, color: 'black'}}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
