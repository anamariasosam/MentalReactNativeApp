import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Tile extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderDescription() {
    const { tile, expanded } = this.props;

    if (expanded) {
      return (
        <Text style={{ flex: 1 }}>
          {tile.description}
        </Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.tile;

    return (
      <View>
        <Text>
          {title}
        </Text>
        <Button
          title="+"
          onPress={() => this.props.selectTile(id)}
        />
        {this.renderDescription()}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTileId === ownProps.tile.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(Tile);
