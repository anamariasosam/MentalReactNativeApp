import React from 'react'
import { Text } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  infoTypeLabel: {
    fontSize: 20,
    textAlign: 'right',
    paddingBottom: 10,
    color: '#2EC4B6',
  },
  infoAnswerLabel: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#FF9F1C',
  },
})

const Status = ({ matched, time, cardsTotal }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <Text style={styles.infoTypeLabel}>Parejas:</Text>
      <Text style={styles.infoTypeLabel}>Tiempo:</Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.infoAnswerLabel}>
        {matched} / {cardsTotal}
      </Text>
      <Text style={styles.infoAnswerLabel}>{time}</Text>
    </View>
  </View>
)

Status.propTypes = {
  matched: PropTypes.number,
  time: PropTypes.number,
  cardsTotal: PropTypes.number,
}

export default Status
