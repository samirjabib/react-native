import { View, Text, StyleSheet, Button} from 'react-native'
import { usePermissionsHook } from '../hooks/usePermissionsHook';
import { BlackButton } from '../components';

export const PermissionsScreen = () => {

    const { onCheckLocationPermissions, locationStatus } = usePermissionsHook()



    return(
        <View style={stlyes.container}>
            <Text style={stlyes.title}> Para usar esta aplicacion necesitas Activar el GPS</Text>
            <Text style={stlyes.title}>
                STATUS:{JSON.stringify(locationStatus)}
            </Text>

            <BlackButton title="Permiso" onPress={onCheckLocationPermissions}/>
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
        fontSize:15,
        color:'black',
        marginBottom:10,
    }
})