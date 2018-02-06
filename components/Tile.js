import React, { Component } from 'react';
import {
  Text,
  Button,
  TouchableHighlight,
  LayoutAnimation,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Tile extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  showImage() {
    const { tile, clicked } = this.props;

    if (clicked) {
      return (
        <Image
          style={{width: 50, height: 50}}
          source={{uri: tile.imageUrl}}
        />
      );
    }
  }

  render() {
    const { id, title } = this.props.tile;

    return (
      <View>
        <TouchableHighlight onPress={() => this.props.selectTile(id)}>
          <Text>
            {title}
          </Text>
        </TouchableHighlight>
        {this.showImage()}
      </View>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const clicked = state.selectedTileId === ownProps.tile.id;
  return { clicked };
};

export default connect(mapStateToProps, actions)(Tile);
