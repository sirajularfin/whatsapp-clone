import { useContext } from 'react';
import createDataContext from '../index';
import actions from './actions';
import reducer from './reducer';

const { Context: AuthContext, Provider: AuthProvider } = createDataContext(
  reducer,
  actions,
  [],
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export default AuthProvider;
