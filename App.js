import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Text style={styles.purple}>hello moto</Text>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'pink' }} />
      <View style={{ flex: 1, backgroundColor: '#b0e1d7' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    marginTop: 25,
  },
  purple: {
    color: "#ddbbff",
    fontSize: 30,
  },
});
