import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pagina1} from '../screens/Pagina1';
import {Pagina2} from '../screens/Pagina2';
import {Pagina3} from '../screens/Pagina3';
import {PaginaPersona} from '../screens/PersonaPagina';

export type RootStackParams = {
  //tipamos las rutas a crear
  Pagina1: undefined;
  Pagina2: undefined;
  Pagina3: undefined;
  PaginaPersona: {id: number; nombre: string};
};

const StackRootNavigator = createNativeStackNavigator<RootStackParams>(); //creamos las rutas nativas

export const StackNavigator = () => {
  console.log('hola');
  return (
    <StackRootNavigator.Navigator
      screenOptions={{
        headerShadowVisible: true,
      }}>
      <StackRootNavigator.Screen
        name="Pagina1" //tneemos que poner el mismo nombre del componente
        options={{title: 'Pagina 1'}} //Nos permite poner title en el header provicional
        component={Pagina1}
      />
      <StackRootNavigator.Screen
        name="Pagina2"
        options={{title: 'Pagina 2'}}
        component={Pagina2}
      />
      <StackRootNavigator.Screen
        name="Pagina3"
        options={{title: 'Pagina 3'}}
        component={Pagina3}
      />
      <StackRootNavigator.Screen
        name="PaginaPersona"
        options={{title: 'Pagina PersonaPage'}}
        component={PaginaPersona}
      />
    </StackRootNavigator.Navigator>
  );
};
