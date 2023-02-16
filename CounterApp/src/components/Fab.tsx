import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from "react-native"


interface Props{
    title:string,
    onPress: () => void,
    position:'br' | 'bl'
}

export const Fab = ({title, onPress, position }:Props) => {

    const ios = () => {
        return(
            <View
                style={[
                    styles.fabLocation,
                    (position === "bl") ? styles.left : styles.right
                ]}
            >
                {/* Usamos touchableOpacity en IOS para los botones  */}
                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.75}
                >
                    <View style={styles.fab}>
                        <Text style={styles.textButton}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const android = () => {
        return(
            <View
                style={[
                    styles.fabLocation,
                    (position === "bl") ? styles.left : styles.right
                ]}
            >
                {/* Usamos touchableOpacity en IOS para los botones  */}

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

    return (Platform.OS ==="ios") ? ios() : android()
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