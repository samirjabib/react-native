import { useState } from "react"
import { View, Text,  Button, TouchableOpacity } from "react-native"


 export const CounterScreen = () => {

  const [counter, setCounter] = useState<number>(0)




  return(
    <View
      style={{
        flex:1,
        justifyContent:"center"
      }}
    >
      <Text
        style={{
          textAlign:"center",
          fontSize:40,
        }}
      >
        Counter:{counter}
      </Text>

      <TouchableOpacity
        onPress={ () =>  setCounter(counter - 1 )}
      >
        <Text>on Click</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        onPress={ () =>  setCounter(counter + 2)}
      >
        <Text>on Click</Text>
      </TouchableOpacity>

    </View>
  )
}

