import React, { Component } from 'react';
import {
  Text,
  Button,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Tile extends Component {
  constructor(props) {
    super(props)

    this.showImage = this.showImage.bind(this)
  }

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  showImage() {
    this.props.selectTile(this.props.tile.id)
  }

  render() {
    const { imageUrl, opacity } = this.props.tile;

    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showImage()}
        >
          <Image
            style={{ width: 50, height: 50, opacity }}
            source={{uri: imageUrl}}
          />
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 10,
    width: 70,
    height: 70,
    marginTop: 10
  }
});

export default connect(null, actions)(Tile);
