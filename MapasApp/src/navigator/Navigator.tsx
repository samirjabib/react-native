import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapScreen, PermissionsScreen} from '../pages';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PermissionsScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};
