import { combineReducers } from 'redux'

import SelectionReducer from './SelectionReducer'

export default combineReducers({
  tiles: SelectionReducer,
  selected: function (state = {validators: [], reset: false}, action) {
    if (action.type === 'select_tile') {

      if (state.validators.length < 2) {
        const selectedCards = state.validators.concat(action.payload.title)
        console.log(selectedCards);
        if ( selectedCards.length === 2 ) {
          if (selectedCards[0] !== selectedCards[1]) {
            return {
              validators: [],
              reset: true
            }
          }
          else {
            return {
              validators: [],
              reset: false
            }
          }
        }

        return {
          validators: selectedCards,
          reset: false
        }
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
