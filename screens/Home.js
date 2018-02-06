import React, {Component} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux'

import Tile from '../components/Tile'

class Home extends Component {
  static navigationOptions = {
    title: 'Game',
  };

  constructor(props) {
    super(props)

    this.state = {
      allTiles: this.props.tiles
    }

    this.renderTiles = this.renderTiles.bind(this)
  }

  renderTiles() {
    return this.state.allTiles.map(tile => <Tile tile={tile} key={tile.id}  />)
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
    tiles: state.tiles
  }
};

export default connect(mapStateToProps)(Home);
