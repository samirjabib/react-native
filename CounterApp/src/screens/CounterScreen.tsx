import { useState } from "react"
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native"
import { Fab } from "../components"


 export const CounterScreen = () => {

  const [counter, setCounter] = useState<number>(0)


  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        Counter:{counter}
      </Text>

      <Fab
        title="+1"
      />

      <Fab
        title="-1"
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
  fabLocationBL:{
    position:"absolute",
    bottom:0,
    right:0,
  },
  fabLocationBR:{
    position:"absolute",
    bottom:10,
    left:0,
  },
  fab:{
    backgroundColor:"red",
    with:60,
    height:60,
    width:60,
    borderRadius:100,
    justifyContent:"center"
  },
  textButton:{
    textAlign:"center",
    fontSize:25,
    alignSelf:"center"
  }
})

