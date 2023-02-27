import { SafeAreaView, StyleSheet } from 'react-native';
import { BoxObjectModelScreen } from './src';
import { CounterScreen } from './src/screens/CounterScreen';


export const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <BoxObjectModelScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'red'
  },
})