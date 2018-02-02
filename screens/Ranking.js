import React, {Component} from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';


class Ranking extends Component {
  static navigationOptions = {
    title: 'Ranking',
  };

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <Text>Ranking</Text>
        <Button
          title="Go to Home"
          onPress={() => navigate('Home')}
        />
      </View>
    )
  }
}

export default Ranking;
