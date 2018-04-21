const defaultState = {
  shops: [
    {name: 'shop1', city: 'patras'},
    {name: 'shop2', city: 'patras'},
    {name: 'shop3', city: 'patras'},
    {name: 'shop4', city: 'bristol'},
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVE_SHOPS_SUCCEED':
      return{
        ...state,
        shops: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}