import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
});

export default index;
