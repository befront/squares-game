import * as React from 'react';

export type ActionType = {
    type: string,
    payload?: any
};
export type DispatchType = (action: ActionType) => void;
export type StateType = {
    boardSize: number,
    players: PlayerType[]
};

export const StateContext = React.createContext<StateType | undefined>(undefined);
export const DispatchContext = React.createContext<DispatchType | undefined>(undefined);