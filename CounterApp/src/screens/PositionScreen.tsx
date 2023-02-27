import {View, Text, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 12,
    borderColor: 'yellow',
    flex: 1,
    backgroundColor:'#00F0B5',
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor:'#D1AC00',
    borderWidth:4,
    position:'absolute',
    top:0,
    left:40,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor:'#F6BE9A',
    borderWidth:4,
    position:'relative',
    top:40,

  },
});
