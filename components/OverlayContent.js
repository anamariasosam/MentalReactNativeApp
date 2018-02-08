import React from 'react'
import {
  Button,
  Text
} from 'react-native-elements'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

const OverlayContent = ({navigation, text, buttonText}) => {
  const { navigate } = navigation;

  return(
    <View>
      <Text h4 style={styles.title}>
        {text}
      </Text>
      <Image
        style={{  width: 250,
        height: 250, marginBottom: 10 }}
        source={require('../images/celebrate.gif')}
      />
      <Button
        buttonStyle={styles.button}
        text={buttonText}
        onPress={() => navigate('Ranking')}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#bf7adb'
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  }
})

export default OverlayContent
