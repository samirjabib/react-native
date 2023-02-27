import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window'); //Extraemos las dimensiones de la pantalla

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions(); //Con esto extraimos las dimensiones reales del hook a tiempo real

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaVerde} />
        <View style={{...styles.cajaMorada, width: width * 0.75}} />
      </View>
      <Text style={styles.title}>
        W:{width}, H:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
    borderWidth: 5,
  },
  cajaVerde: {
    backgroundColor: 'green',
    height: '50%',
    width: '50%',
    borderWidth: 5,
    borderColor: 'yellow',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    borderWidth: 4,
    height: 200,
    width: 200,
  },
  title: {
    color: 'black',
    width:200,
    height:200,
    backgroundColor:'white',
    borderColor:'blue',
    textAlign: 'center'
  },
});
