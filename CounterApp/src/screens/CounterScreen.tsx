import { useState } from "react"
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native"
import { Fab } from "../components"


 export const CounterScreen = () => {

  const [counter, setCounter] = useState<number>(4)


  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        Counter:{counter}
      </Text>

      <Fab
        title="+1"
        onPress={ () => setCounter(counter + 1)}
        position="br"
        
      /> 


      <Fab
        title="-1"
        onPress={ () => setCounter(counter - 1)}
        position="bl"
      /> 

   

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"
  },
  text:{
    fontSize:40,
    textAlign:"center",
  },

})

