export const selectTile = (tileId) => {
  return {
    type: 'select_tile',
    payload: tileId
  }
}
