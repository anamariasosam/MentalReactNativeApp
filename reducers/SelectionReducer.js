export default (state = null, action) => {

  switch (action.type) {
    case 'select_tile':
      return action.payload
    default:
      return state
  }

};
