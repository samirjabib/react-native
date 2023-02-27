import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Samir ama a eliana XD</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    title:{
        fontSize:20,
        borderWidth:10,
        padding:20,
        color:'white',
        backgroundColor:'orange',
        marginHorizontal:40,
        marginTop:20,
    }
})