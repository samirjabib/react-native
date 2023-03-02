import { View, Text, StyleSheet, Button} from 'react-native'
import { usePermissionsHook } from '../hooks/usePermissionsHook';

export const PermissionsScreen = () => {

    const { onCheckLocationPermissions, locationStatus } = usePermissionsHook()

    

    return(
        <View style={stlyes.container}>
            <Text style={stlyes.title}>
                {JSON.stringify(locationStatus)}
            </Text>

            <Button title="Permiso" onPress={onCheckLocationPermissions}/>
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
        fontSize:20,
        color:'black'
    }
})