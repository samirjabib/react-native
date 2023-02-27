import { SafeAreaView, StyleSheet } from 'react-native';
import { BoxObjectModelScreen, DimensionesScreen, PositionScreen } from './src';
import { CounterScreen } from './src/screens/CounterScreen';


export const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      {/* <DimensionesScreen/> */}
      <PositionScreen/>
      {/* <BoxObjectModelScreen/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'white'
  },
})