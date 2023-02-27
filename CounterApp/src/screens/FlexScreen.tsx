import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <Text>Caja 1</Text>
      </View>
      <View style={styles.boxTwo}>
        <Text>Caja 2</Text>
      </View>
      <View style={styles.boxThree}>
        <Text>Caja 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: 'black',
    flex: 1,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end'
    
  },
  boxOne: {
    backgroundColor: 'red',
    borderColor:'black',
    borderWidth:2
  },
  boxTwo: {
    backgroundColor: 'green',
    borderColor:'black',
    borderWidth:2
  },
  boxThree: {
    backgroundColor: 'yellow',
    borderColor:'black',
    borderWidth:2,
    alignSelf:'flex-start',
  },
});
