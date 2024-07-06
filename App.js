import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#c7e0f2" }} boxText={"Box1"}></Box>
      <Box style={{ backgroundColor: "#abc7db" }} boxText={"Box2"}></Box>
      <Box style={{ backgroundColor: "#8c9dbf" }} boxText={"Box3"}></Box>
      <Box style={{ backgroundColor: "#727ab5" }} boxText={"Box4"}></Box>
      <Box style={{ backgroundColor: "#645aad" }} boxText={"Box5"}></Box>
      <Box style={{ backgroundColor: "#5d46a3" }} boxText={"Box6"}></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    borderWidth: 6,
    borderColor: "#110633",
  },
});
