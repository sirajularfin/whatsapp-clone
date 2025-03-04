export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  customerId: string | null;
}

export interface AuthAction {
  type: ActionTypes;
  payload: any;
}

export type AuthDispatch = (action: AuthAction) => void;

export enum ActionTypes {
  SET_TOKEN = 'SET_TOKEN',
  SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN',
  SET_CUSTOMER_ID = 'SET_CUSTOMER_ID',
}
