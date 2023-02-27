import {Text, View, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window'); //Extraemos las dimensiones de la pantalla

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions()  //Con esto extraimos las dimensiones reales del hook a tiempo real

    
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaVerde}/>
        <View />
      </View>
      <Text style={styles.title}>W:{width}, H:{height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:200,
    backgroundColor:'red',
    borderWidth:5,
  },
  cajaVerde:{
    backgroundColor:'green',
    height:'50%',
    width:'50%',
    borderWidth:5,
    borderColor:'yellow'
  },
  cajaMorada:{
    backgroundColor:'purple'
  },
  title:{
    color:'black',
    textAlign:'center'
  }

});
