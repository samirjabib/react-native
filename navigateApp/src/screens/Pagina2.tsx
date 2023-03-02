import { View, Text, Button } from 'react-native';
import { useEffect} from 'react'
import { useNavigation } from '@react-navigation/core';
import { styles } from '../themes/globalStyles';



export const Pagina2 = () => {

  const navigator = useNavigation() // Con este hook podemos ir a la pagina que queramos. 


  useEffect( () => {
    navigator.setOptions({ //Con esto podemos sobrescribir las opciones del navigator 
      title:'Regresar'
    })
  }, [])

  return (
    <View style={ styles.globalMargin }>
    <Text style={styles.title }> Pagina2Screen </Text>

    <Button 
        title="Ir página 3"
        onPress={ () => navigator.navigate('Pagina3')  }
    />

</View>
  );
};
