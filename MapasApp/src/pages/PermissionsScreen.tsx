import { View, Text, StyleSheet} from 'react-native'

export const PermissionsScreen = () => {
    return(
        <View style={stlyes.container}>
            <Text style={stlyes.title}>
                Soy el PermissonsScreen Screen
            </Text>
        </View>
    )
}

const stlyes = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        color:'black'
    }
})