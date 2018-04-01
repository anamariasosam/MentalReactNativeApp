import React from 'react'
import PropTypes from 'prop-types'

import { Button, Text, Overlay } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9F1C',
  },
  title: {
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
})

const WinnerAlert = ({ navigation, visibility, score }) => {
  const { navigate } = navigation

  return (
    <Overlay
      borderRadius={6}
      height="auto"
      isVisible={visibility}
      overlayBackgroundColor="#E71D36"
      width="auto"
      windowBackgroundColor="rgba(255, 255, 255, .9)"
    >
      <View>
        <Text h3 style={styles.title}>
          🎉 TERMINASTE 🎉
        </Text>
        <Text h4 style={styles.title}>
          Tu puntaje es: {score.toFixed(2)}
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Ver Galería"
          onPress={() => navigate('Gallery')}
        />
      </View>
    </Overlay>
  )
}

WinnerAlert.propTypes = {
  navigation: PropTypes.any,
  visibility: PropTypes.bool,
  score: PropTypes.number,
}

export default WinnerAlert
