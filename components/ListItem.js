import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Text style={{ flex: 1 }}>
          {library.description}
        </Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <View>
        <Text>
          {title}
        </Text>
        <Button
          title="+"
          onPress={() => this.props.selectLibrary(id)}
        />
        {this.renderDescription()}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
