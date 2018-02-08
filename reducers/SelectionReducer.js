export default (state = [], action) => {

  switch (action.type) {
    case 'select_tile':
      const tileIndex = state.findIndex(item => item.id === action.payload.id)
      const tile = state[tileIndex]
      tile.opacity = 1

      const tiles =
        state
          .slice(0, tileIndex)
          .concat(
            tile,
            state.slice(tileIndex + 1, state.length)
          )

      return tiles
    case 'reset_tiles':
      return state.map(tile => {
        // resetear tiles que no sean match true!!! 
        tile.opacity = 0
        return tile
      })
    default:
      return state
  }

};
