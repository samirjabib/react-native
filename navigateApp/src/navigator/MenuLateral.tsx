import { StackNavigator } from './StackNavigator';
import { SettingsPagina } from '../screens/SettingsPagina';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator() //CREAMOS EL SIDEBAR


export const MenuLateral = () => {

  const dimensions = useWindowDimensions(); //Sacamos las dimensiones de la pantalla para cambiar la posicion del nav dependiendo de la resolucion

  return (
    <Drawer.Navigator

      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        headerShown:false, //Ocultamos el header que viene con navigator
      }}
      drawerContent={(props : DrawerContentComponentProps) => <MenuInterno {...props}/>} //enviamos mediante props
    >
            {/* Podemos cambiar el nombre que se muestra con la propiedad title  */}
        <Drawer.Screen name="StackNavigator" component={StackNavigator}/>  
        <Drawer.Screen name="Article" component={SettingsPagina}/>
    </Drawer.Navigator>
  )
}


const MenuInterno = (props:DrawerContentComponentProps) => {


    return(
        <DrawerContentScrollView>
            <View>
                <Image
                    source={{ //Image nos trae varias propiedaes uri nos sirve para invocar imagenes http
                        uri:'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'
                    }}
                    style={{width:140, height:140, borderRadius:100, alignItems:'center'}}
                />
            </View>
        </DrawerContentScrollView>
    )
}