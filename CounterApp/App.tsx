import {SafeAreaView, StyleSheet} from 'react-native';
import {
  BoxObjectModelScreen,
  DimensionesScreen,
  FlexScreen,
  PositionScreen,
} from './src';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      <FlexScreen />
      {/* <BoxObjectModelScreen/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
