import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import TilesList from '../store/TilesList'

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#BEBEBE',
    padding: 1,
    width: 50,
    height: 50,
  },
  card: {
    margin: 5,
  },
})

const Tile = ({
  name,
  opacity,
  onPress,
  gallery,
}) => (
  <View style={styles.card}>
    <TouchableOpacity
      disabled={Boolean(opacity)}
      style={styles.image}
      onPress={onPress}
    >
      <Image
        style={{ width: 50, height: 50, opacity }}
        source={TilesList[gallery][name]}
      />
    </TouchableOpacity>
  </View>
)

Tile.propTypes = {
  name: PropTypes.any,
  opacity: PropTypes.any,
  onPress: PropTypes.any,
  gallery: PropTypes.any,
}

export default Tile
