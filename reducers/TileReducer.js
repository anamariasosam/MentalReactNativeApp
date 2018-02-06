import data from './TilesList.json'
import shuffle from 'lodash.shuffle'

export default () => {
  const suffleTiles = shuffle(data).concat(shuffle(data))
  let _tiles = []

  suffleTiles.map((tile, index) =>{
    _tiles.push({
      id: index,
      imageUrl: tile.imageUrl,
      title: tile.title,
      flipped: false,
      matched: false,
      opacity: 0
    })
  })

  return _tiles
}
