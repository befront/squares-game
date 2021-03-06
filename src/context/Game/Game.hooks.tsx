import { useContext } from 'react';

import { StateType, DispatchType, StateContext, DispatchContext } from './Game.context';

export const useGameState = () => {
    const context = useContext<StateType | undefined>(StateContext);

    if (!context) {
        throw new Error('useGameState must be used within a GameStateProvider');
    }

    return context;
};

export const useGameDispatch = () => {
    const context = useContext<DispatchType | undefined>(DispatchContext);

    if (!context) {
        throw new Error('useGameDispatch must be used within a GameDispatchProvider');
    }

    return context;
};

export const useGame = () => [useGameState(), useGameDispatch()];