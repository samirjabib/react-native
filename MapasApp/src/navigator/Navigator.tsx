import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreen, NotificationScreen } from '../pages';


const Stack = createNativeStackNavigator();

export const Navigator = () =>  {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      </Stack.Navigator>
  );
}

