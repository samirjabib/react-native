import { View, Text, StyleSheet } from 'react-native';
export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}/>
      <View style={styles.boxTwo}/>
      <View style={styles.boxThree}/>



    </View>
  );
};

//Solucion 1
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#98C1D9'
//     },
//     boxOne:{
//         backgroundColor:'#4B244A',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'
//     },
//     boxTwo:{
//         backgroundColor:'#7A4419',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white',
//         flex:1

//     },
//     boxThree:{
//         backgroundColor:'#515A47',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'
 
//     }
// }) 


//Solucion 2
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#98C1D9',
//         flexDirection:'column',
//         alignItems:'flex-start',
//         justifyContent:'center'
        
//     },
//     boxOne:{
//         backgroundColor:'#4B244A',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'
//     },
//     boxTwo:{
//         backgroundColor:'#7A4419',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'

//     },
//     boxThree:{
//         backgroundColor:'#515A47',
//         width:'100%',
//         height:100,
//         borderWidth:4,
//         borderColor:'white'

//     }
// }) 


//Solucion 3
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#98C1D9',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    boxOne:{
        alignSelf:'flex-end',
        backgroundColor:'#4B244A',
        width:100,
        height:100,
        borderWidth:4,
        borderColor:'white'
    },
    boxTwo:{
        backgroundColor:'#7A4419',
        width:100,
        height:100,
        borderWidth:4,
        borderColor:'white'

    },
    boxThree:{
        backgroundColor:'#515A47',
        width:100,
        height:100,
        borderWidth:4,
        borderColor:'white',
        alignSelf:'center'
    }
}) 



// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#98C1D9'
//     },
//     boxOne:{
//         backgroundColor:'#4B244A',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'
//     },
//     boxTwo:{
//         backgroundColor:'#7A4419',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'

//     },
//     boxThree:{
//         backgroundColor:'#515A47',
//         width:100,
//         height:100,
//         borderWidth:4,
//         borderColor:'white'
 
//     }
// }) 