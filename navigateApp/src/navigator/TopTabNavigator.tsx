import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatsPagina} from '../screens/ChatsPagina';
import {AlbumsPagina} from '../screens/AlbumsPagina';
import {ContactsPagina} from '../screens/ContactsPagina';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../themes/globalStyles';
import { Text } from 'react-native';

export const TopTabNavigator = () => {
  //Recordar instalar npm views comunnity
  const Tab = createMaterialTopTabNavigator();

  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        showIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,          
        },
        tabBarStyle:{
          shadowColor:'transparent',
          borderBottomWidth: 0,
          elevation: 0, //ELEVATION QUITA EL SHADOWBOX
        },
        tabBarIcon: ({color, focused}) => {
          //Desectructuramos las propiedades traidas por props del tabBar con esto pasamos de manera dinamica los iconos a los stacks del screen
          let iconName: string;
          switch (route.name) {
            case 'ChatsPagina':
              iconName = 'ChatsPagina';
              break;
            case 'AlbumsPagina':
              iconName = 'AlbumsPagina';
              break;
            case 'ContactsPagina':
              iconName = 'T3';
              break;
            default:
              iconName = 'ContactsPagina';
          }
          return (
            <Text style={{color: color, backgroundColor: color}}>
              {iconName}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="ChatsPagina" component={ChatsPagina} />
      <Tab.Screen name="AlbumsPagina" component={AlbumsPagina} />
      <Tab.Screen name="ContactsPagina" component={ContactsPagina} />
    </Tab.Navigator>
  );
};
