import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{"1 + 1 = 2"}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  text: {
    color: "#333333",
    fontSize: 20
  }
});
