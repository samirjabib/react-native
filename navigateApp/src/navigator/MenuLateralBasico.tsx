import { StackNavigator } from './StackNavigator';
import { SettingsPagina } from '../screens/SettingsPagina';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator() //CREAMOS EL SIDEBAR



export const MenuLateralBasico = () => {
  //Podemos cambiar 
  return (
    <Drawer.Navigator>
            {/* Podemos cambiar el nombre que se muestra con la propiedad title  */}
        <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator}/>  
        <Drawer.Screen name="Article" component={SettingsPagina}/>
    </Drawer.Navigator>
  )
}
