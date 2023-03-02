import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapScreen, PermissionsScreen} from '../pages';
import { usePermissionsHook } from '../hooks/usePermissionsHook';
import { LoadingScreen } from '../pages/LoadingScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {

  const { locationStatus } = usePermissionsHook()

  if(locationStatus === 'unavailable'){
    return <LoadingScreen/>
  }

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
