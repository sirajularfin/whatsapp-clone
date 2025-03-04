import { ActionTypes, AuthDispatch } from './types';

const actions = (dispatch: AuthDispatch): (() => void) => {
  return (): void => {
    dispatch({ type: ActionTypes.SET_TOKEN, payload: 'token' });
  };
};

export default actions;
