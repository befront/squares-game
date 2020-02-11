import React, { useReducer } from 'react';

import { StateContext, DispatchContext } from './Game.context';

import { reducer } from './Game.reducer';

export const Provider = ({ children }) => {
    const initialState = {
        boardSize: 2,
        players: {}
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};