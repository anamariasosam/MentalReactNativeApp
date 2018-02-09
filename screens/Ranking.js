import React, {Component} from 'react'
import {
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
        <Button
          title="Volver a jugar"
          onPress={() => navigate('Home')}
        />
      </View>
    )
  }
}

export default Ranking;
