import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.element}>
        <FontAwesome name="wpforms" size={24} color="white" />
        <Text style={styles.title}>FormApp</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6495ed",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 10,
  },
});
export default CustomHeader;
