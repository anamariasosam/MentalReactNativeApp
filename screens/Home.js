import React, {Component} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux'
import {resetTiles} from '../actions'

import Tile from '../components/Tile'

class Home extends Component {
  static navigationOptions = {
    title: 'Game',
  };

  componentWillUpdate(nextProps) {
    if (nextProps.selected.reset) {
      this.props.resetTiles()
    }
  }

  renderTiles() {
    return this.props.tiles.map(tile => <Tile {...tile} key={tile.id} />)
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.board}>
          {this.renderTiles()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});

// take a global state object
const mapStateToProps = state => {
  return {
    tiles: state.tiles,
    selected: state.selected
  }
};

export default connect(mapStateToProps, {resetTiles})(Home);
