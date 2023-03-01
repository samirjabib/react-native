import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from './StackNavigator';
import { SettingsPagina } from '../screens/SettingsPagina';

const Drawer = createDrawerNavigator() //CREAMOS EL SIDEBAR



export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="StackNavigator" component={StackNavigator}/>
        <Drawer.Screen name="Article" component={SettingsPagina}/>
    </Drawer.Navigator>
  )
}
