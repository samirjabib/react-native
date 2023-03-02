import { StackNavigator } from './StackNavigator';
import { SettingsPagina } from '../screens/SettingsPagina';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator() //CREAMOS EL SIDEBAR


export const MenuLateralBasico = () => {

  const dimensions = useWindowDimensions(); //Sacamos las dimensiones de la pantalla para cambiar la posicion del nav dependiendo de la resolucion

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }},
    >
            {/* Podemos cambiar el nombre que se muestra con la propiedad title  */}
        <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator}/>  
        <Drawer.Screen name="Article" component={SettingsPagina}/>
    </Drawer.Navigator>
  )
}
