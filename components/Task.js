import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "blue",
    opacity: 0.4,
    borderRadius: 4,
    marginRight: 16,
  },
  itemText: { maxWidth: "80%" },
  circular: {
    width: 12,
    height: 12,
    borderColor: "blue",
    opacity: 0.4,
    borderWidth: 2,
    borderRadius: 5,
  },
});
