import React, { Component } from 'react'
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet
} from 'react-native'

const TileItem = ({ imageUrl, opacity, onPress }) => {
  return (
    <View>
      <TouchableOpacity disabled={opacity ? true : false} style={styles.button} onPress={onPress}>
        <Image
          style={{ width: 50, height: 50, opacity }}
          source={{uri: imageUrl}}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#011627',
    padding: 10,
    width: 70,
    height: 70,
    marginTop: 10
  }
})

export default TileItem
