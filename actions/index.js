export const selectTile = (tileId) => {
  return {
    type: 'select_tile',
    payload: tileId
  }
}

export const resetTiles = () => {
  return {
    type: 'reset_tiles'
  }
}
