
const initialState = {
    loading: false,
    errors: null,
    message : ''
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'SET_ERRORS':
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case 'CLEAR_ERRORS':
        return {
          ...state,
          loading: false,
          errors: null
        };
      case 'LOADING_UI':
        return {
          ...state,
          loading: true
        };
        case 'SET_MESSAGE':
          return {
            ...state,
            message : action.payload
          }
      default:
        return state;
    }
  }