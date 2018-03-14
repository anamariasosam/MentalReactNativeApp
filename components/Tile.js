import React, { Component } from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";

import TilesList from "../store/TilesList";

const Tile = ({ name, opacity, onPress, gallery }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        disabled={opacity ? true : false}
        style={styles.image}
        onPress={onPress}
      >
        <Image
          style={{ width: 50, height: 50, opacity }}
          source={TilesList[gallery][name]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: "#BEBEBE",
    padding: 1,
    width: 50,
    height: 50
  },
  card: {
    margin: 5
  }
});

export default Tile;
