import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

import GalleryList from '../store/GalleryList'

class Gallery extends Component {
  static navigationOptions = {
    title: 'Galerías',
    headerLeft: null
  };

  render() {
    const { navigate } = this.props.navigation;
    const data = Object.keys(GalleryList);
    return(
      <ScrollView>
        {
          data.map( (gallery, index) =>
            <Card
              key={index}
              imageProps={{resizeMode: 'contain'}}
              title={`Galería ${index+1}`}
              image={GalleryList[gallery]}>
              <Button
                text="Comenzar"
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                onPress={() => navigate('Game', { gallery })}
               />
            </Card>
          )
        }
      </ScrollView>
    )
  }
}

export default Gallery;
