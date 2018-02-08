import { combineReducers } from 'redux'

import SelectionReducer from './SelectionReducer'

export default combineReducers({
  tiles: SelectionReducer,
  selected: function (state = {validators: [], reset: false}, action) {
    if (action.type === 'select_tile' && state.validators.length < 2) {
      return {
        validators: state.validators.concat(action.payload.title),
        reset : false
      }
    }

    if ( action.type === 'select_tile' &&
      state.validators.length === 2 ) {
        return {validators: [], reset: true}
      if (state.validators[0] === state.validators[1]) {

      }
    }

    if (action.type === 'reset_tiles') {
      return {validators: [], reset: false}
    }
    return state
  }
  // reset:
  // selectedTileId: SelectionReducer
})
