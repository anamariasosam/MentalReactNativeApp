import React, {Component} from 'react'
import {
  Text,
  ListView,
} from 'react-native';
import {connect} from 'react-redux'

import Tile from '../components/Tile'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props)

    this.state = {
      dataSource: []
    }
    this.populateTiles = this.populateTiles.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    this.populateTiles()
  }

  populateTiles() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(this.props.tiles),
    })
  }

  renderRow(tile) {
    return <Tile tile={tile}/>
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

// take a global state object
const mapStateToProps = state => {
  return {
    tiles: state.tiles
  }
};

export default connect(mapStateToProps)(Home);
