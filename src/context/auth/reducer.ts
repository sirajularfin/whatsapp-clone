import { AuthAction, ActionTypes, AuthState } from './types';

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case ActionTypes.SET_CUSTOMER_ID:
      return { ...state, customerId: action.payload };
    default:
      return state;
  }
};

export default reducer;
