import React, {Component} from 'react'
import {
  Text,
  ListView,
} from 'react-native';
import {connect} from 'react-redux'

import ListItem from '../components/ListItem'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props)

    this.state = {
      dataSource: []
    }
    this.populateLibraries = this.populateLibraries.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    this.populateLibraries()
  }

  populateLibraries() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(this.props.libraries),
    })
  }

  renderRow(library) {
    return <ListItem library={library}/>
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
    libraries: state.libraries
  }
};

export default connect(mapStateToProps)(Home);
