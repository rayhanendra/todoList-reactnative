import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Test</Text>
      </View>

      <View style={styles.items}>
        <Task text={"Task 1"} />
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: { paddingTop: 80, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 24 },
  items: { paddingHorizontal: 20, marginTop: 16 },
});
