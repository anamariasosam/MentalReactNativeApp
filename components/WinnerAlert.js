import React from 'react'
import PropTypes from 'prop-types'

import { Button, Text, Overlay } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9F1C',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
})

const WinnerAlert = ({ navigation, visibility, score }) => {
  const { navigate } = navigation

  return (
    <Overlay
      isVisible={visibility}
      windowBackgroundColor='rgba(255, 255, 255, .9)'
      width='auto'
      height='auto'
      overlayBackgroundColor='#E71D36'
      borderRadius={6}
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
          title='Ver Galería'
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
