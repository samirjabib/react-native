import { View, Text, TouchableOpacity } from "react-native"


interface Props{
    title:string
}

export const Fab = ({title}:Props) => {


    return(
        <TouchableOpacity
        onPress={ () =>  console.log('1')}
      >
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
      
    )
}