import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';


function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}

export default App;
