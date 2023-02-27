import { SafeAreaView, StyleSheet } from 'react-native';
import { BoxObjectModelScreen, DimensionesScreen } from './src';
import { CounterScreen } from './src/screens/CounterScreen';


export const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <DimensionesScreen/>
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