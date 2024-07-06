import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#c7e0f2" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#abc7db" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#8c9dbf" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#727ab5" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#645aad" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#5d46a3" }}>Box 6</Box>
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
