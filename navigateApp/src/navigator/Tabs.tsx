import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Pagina} from '../screens/Tab1Pagina';
import { Tab3Pagina } from '../screens/Tab3Pagina';
import { Tab2Pagina } from '../screens/Tab2Pagina';

const Tab = createBottomTabNavigator(); //Creamos el tab navigation del botton

export const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'red',
            tabBarStyle:{
                borderTopColor:'green'
            }
        }}
        
    
    >
      <Tab.Screen name="Tab1Pagina" component={Tab1Pagina} />
      <Tab.Screen name="Tab2Pagina" component={Tab2Pagina} />
      <Tab.Screen name="Tab3Pagina" component={Tab3Pagina} />
    </Tab.Navigator>
  );
};
