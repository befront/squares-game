import uuid from 'uuid/v1';

import { getRandomColor } from './Game.utils';

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_BOARD_SIZE': {
            const { size } = action.payload;

            return {
                ...state,
                boardSize: +size
            };
        }
        case 'CREATE_PLAYER': {
            const playerId = uuid();

            return {
                ...state,
                players: {
                    ...state.players,
                    [playerId]: {
                        id: playerId,
                        name: '',
                        points: 0,
                        color: getRandomColor()
                    }
                }
            };
        }
        case 'UPDATE_PLAYER': {
            const { playerId, name } = action.payload;

            const player = { ...state.players[playerId], name };

            return {
                ...state,
                players: {
                    ...state.players,
                    [playerId]: player
                }
            }
        }
        case 'UPDATE_PLAYER_POINTS': {
            const { playerId, points } = action.payload;

            return {
                ...state,
                players: {
                    ...state.players,
                    [playerId]: {
                        ...state.players[playerId],
                        points
                    } 
                }
            }
        }
        case 'CLEAR_PLAYERS': {
            return {
                ...state,
                players: Object.keys(state.players).reduce((players, playerKey) => {
                    const player = { ...state.players[playerKey], points: 0 };

                    return {
                        ...players,
                        [playerKey]: player
                    };
                }, {})
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};