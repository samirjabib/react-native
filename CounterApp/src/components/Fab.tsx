import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from "react-native"


interface Props{
    title:string,
    onPress: () => void,
    position:'br' | 'bl'
}

export const Fab = ({title, onPress, position }:Props) => {


    return(
        <View
            style={[
                styles.fabLocation,
                (position === "bl") ? styles.left : styles.right
            ]}
        >
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('blue', true, 30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.textButton}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>


    )
}

const styles= StyleSheet.create({
    fabLocation:{
        position:"absolute",
        bottom:10,
    },
    fab:{
    backgroundColor:"red",
    with:60,
    height:60,
    width:60,
    borderRadius:100,
    justifyContent:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    },

    right:{
        right:10,
    },
    left:{
        left:10
    },
    textButton:{
        textAlign:"center",
        fontSize:25,
        alignSelf:"center"
    }
})