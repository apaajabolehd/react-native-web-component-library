import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: "blue",
  },
  headerText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

interface HeaderProps {
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  backgroundColor = "red",
}) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <Text style={styles.headerText}>I am the third component</Text> 
      <ActivityIndicator />
    </View>
  );
};
