const defaultState = {
  isLoggedIn: false,
  username: '',
  password: '',
  rightUsername: 'nkostop',
  rightPassword: 'nkostop',
};

export default (state = defaultState, action) => {
  switch (action.type){
    case 'CHANGE_TEXTFIELD':
      return{
        ...state,
        [action.payload.field]: action.payload.value,
      };
      break;
    case 'LOG_IN_USER_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };
      break;
    default:
      return {
        ...state,
      }
  }
}