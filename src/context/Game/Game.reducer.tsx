import uuid from 'uuid/v1';
import flatten from 'lodash/flatten';

import { getRandomColor, getPlayerPoints } from './Game.utils';

import { StateType, ActionType } from './Game.context';

export const reducer = (state: StateType, action: ActionType) => {
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
                players: [
                    ...state.players,
                    {
                        id: playerId,
                        name: '',
                        points: 0,
                        cells: [],
                        color: getRandomColor()
                    }
                ]
            };
        }
        case 'UPDATE_PLAYER': {
            const { playerId, name } = action.payload;

            return {
                ...state,
                players: state.players.map(player => {
                    if (player.id === playerId) {
                        return {
                            ...player,
                            name
                        };
                    } 

                    return player;
                })
            }
        }
        case 'UPDATE_PLAYER_GAME_DATA': {
            const { playerId, rowIndex, columnIndex } = action.payload;

            return {
                ...state,
                players: state.players.map((player) => {
                    if (player.id === playerId) {
                        const cells = [...player.cells];

                        if (flatten(state.players.map(player => player.cells)).indexOf(rowIndex, columnIndex) === -1) {
                            cells.push(`${rowIndex}:${columnIndex}`);
                        }

                        const points = player.points ? getPlayerPoints(cells) : 1;

                        return {
                            ...player,
                            cells,
                            points
                        };
                    } 

                    return player;
                })
            }
        }
        case 'UPDATE_PLAYER_POINTS': {
            const { playerId, points } = action.payload;

            return {
                ...state,
                players: state.players.map(player => {
                    if (player.id === playerId) {
                        return {
                            ...player,
                            points
                        };
                    } 

                    return player;
                })
            }
        }
        case 'CLEAR_PLAYERS': {
            return {
                ...state,
                players: state.players.map(player => ({
                    ...player,
                    points: 0,
                    cells: []
                }))
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};