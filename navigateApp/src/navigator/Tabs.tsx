import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Pagina} from '../screens/Tab1Pagina';
import {Tab3Pagina} from '../screens/Tab3Pagina';
import {Tab2Pagina} from '../screens/Tab2Pagina';
import {colores} from '../themes/globalStyles';
import {Platform, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

//Este es el Tab de Android
const BottonTabAndroid = createMaterialBottomTabNavigator();
export const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        //Podemos desectructurar las rutas de las props,
        tabBarIcon: ({color, focused}) => {
          //Desectructuramos las propiedades traidas por props del tabBar con esto pasamos de manera dinamica los iconos a los stacks del screen
          let iconName: string;
          switch (route.name) {
            case 'Tab1Pagina':
              iconName = 'T1';
              break;
            case 'Tab2Pagina':
              iconName = 'T2';
              break;
            case 'Tab3Pagina':
              iconName = 'T3';
              break;
            default:
              iconName = '';
          }
          return <Text style={{color: color}}>{iconName}</Text>;
        },
      })}>
      <BottonTabAndroid.Screen
        name="Tab1Pagina"
        options={{
          title: 'tap1',
        }}
        component={Tab1Pagina}
      />
      {/* <Tab.Screen name="Tab1Pagina" options={{title:'tap1', tabBarIcon: (props) => <Text style={{color:props.color}}>T1</Text>}} component={Tab1Pagina} /> Es una manera de pasar el icon al menu*/}
      <BottonTabAndroid.Screen
        name="Tab2Pagina"
        options={{title: 'tap2'}}
        component={TopTabNavigator}
      />
      <BottonTabAndroid.Screen
        name="Tab3Pagina"
        options={{title: 'tap3'}}
        component={Tab3Pagina}
      />
    </BottonTabAndroid.Navigator>
  );
};

//Este es el tap de IOS
const BottonTabIOS = createBottomTabNavigator(); //Creamos el tab navigation del botton

export const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        //Nos permite cambiar las propiedades de estilo de una escena que vendria a ser la pestaña que tenemos abierta
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        //Podemos desectructurar las rutas de las props,
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          //Podemos cambiar el estilo del tap
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0, //ELEVATION QUITA EL SHADOWBOX
        },
        tabBarIcon: ({color, focused, size}) => {
          //Desectructuramos las propiedades traidas por props del tabBar con esto pasamos de manera dinamica los iconos a los stacks del screen
          let iconName: string;
          switch (route.name) {
            case 'Tab1Pagina':
              iconName = 'T1';
              break;
            case 'Tab2Pagina':
              iconName = 'T2';
              break;
            case 'Tab3Pagina':
              iconName = 'T3';
              break;
            default:
              iconName = '';
          }
          return (
            <Text style={{color: color, backgroundColor: color}}>
              {iconName}
            </Text>
          );
        },
      })}>
      <BottonTabIOS.Screen
        name="Tab1Pagina"
        options={{
          title: 'tap1',
        }}
        component={Tab1Pagina}
      />
      {/* <Tab.Screen name="Tab1Pagina" options={{title:'tap1', tabBarIcon: (props) => <Text style={{color:props.color}}>T1</Text>}} component={Tab1Pagina} /> Es una manera de pasar el icon al menu*/}
      <BottonTabIOS.Screen
        name="Tab2Pagina"
        options={{title: 'tap2'}}
        component={TopTabNavigator}
      />
      <BottonTabIOS.Screen
        name="Tab3Pagina"
        options={{title: 'tap3'}}
        component={Tab3Pagina}
      />
    </BottonTabIOS.Navigator>
  );
};
