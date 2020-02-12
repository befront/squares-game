import React, { useReducer } from 'react';

import { StateType, ActionType, StateContext, DispatchContext } from './Game.context';

import { reducer } from './Game.reducer';

interface IProps {
    children: React.ReactNode
}

export const Provider: React.FC<IProps> = ({ children }) => {
    const initialState = {
        boardSize: 2,
        players: []
    };

    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};