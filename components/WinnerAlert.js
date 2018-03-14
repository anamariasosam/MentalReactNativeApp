import React from "react";

import { Button, Text, Overlay } from "react-native-elements";

import { View, Image, StyleSheet } from "react-native";

const WinnerAlert = ({ navigation, visibility }) => {
  const { navigate } = navigation;

  return (
    <Overlay
      isVisible={visibility}
      windowBackgroundColor="rgba(255, 255, 255, .9)"
      width="auto"
      height="auto"
      overlayBackgroundColor="#E71D36"
      borderRadius={6}
    >
      <View>
        <Text h4 style={styles.title}>
          🎉 TERMINASTE 🎉
        </Text>
        <Image
          style={{
            width: 250,
            height: 250,
            marginBottom: 10
          }}
          source={require("../images/celebrate.gif")}
        />
        <Button
          buttonStyle={styles.button}
          text="Ver Galería"
          onPress={() => navigate("Gallery")}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF9F1C"
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    color: "white"
  }
});

export default WinnerAlert;
