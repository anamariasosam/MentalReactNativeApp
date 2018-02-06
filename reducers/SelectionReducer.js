export default (state = null, action) => {

  switch (action.type) {
    case 'select_tile':
      console.log(action.payload);
      return action.payload
    default:
      return state
  }

};
