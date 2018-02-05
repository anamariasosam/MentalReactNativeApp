import { combineReducers } from 'redux'

import TileReducer from './TileReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  tiles: TileReducer,
  selectedTileId: SelectionReducer
})
