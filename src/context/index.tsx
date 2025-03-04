import React, { useReducer } from 'react';

export default <S, A>(
  reducer: React.Reducer<S, A>,
  actions: { [key: string]: (dispatch: React.Dispatch<A>) => any },
  initialState: S,
) => {
  const Context = React.createContext<
    { state: S; [key: string]: any } | undefined
  >(undefined);

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: { [key: string]: any } = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
