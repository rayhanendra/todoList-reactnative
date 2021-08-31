import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>To do list</Text>
      </View>

      <View style={styles.items}>
        {taskItems.map((text, index) => (
          <TouchableOpacity key={index} onPress={() => handleDeleteTask(index)}>
            <Task text={text} />
          </TouchableOpacity>
        ))}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 254,
  },
  addWrapper: {
    width: 54,
    height: 54,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
