import * as React from 'react';
import flatten from 'lodash/flatten';

import { SCREENS } from '@constants';

import { useGameState, useGameDispatch } from '@context/Game';

import { getNextPlayer, getRandomPlayer } from './GameScreen.utils';

import GameScreen from './GameScreen';

interface IProps {
    setCurrentScreen(screen: string): void
}

const GameScreenContainer: React.FC<IProps> = ({ setCurrentScreen }) => {
    const dispatchGame = useGameDispatch();
    const game = useGameState();

    const [isWinModalOpen, setIsWinModalOpen] = React.useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = React.useState<PlayerType>(getRandomPlayer(game.players));

    React.useEffect(() => {
        const cells = flatten(game.players.map(player => player.cells));

        if (cells.length === game.boardSize * game.boardSize) {
            setIsWinModalOpen(true);
        }
    }, [currentPlayer, dispatchGame, game.boardSize, game.players]);

    const handleMenuClick = () => {
        dispatchGame({
            type: 'CLEAR_PLAYERS'
        });

        setCurrentScreen(SCREENS.START);
    };

    const handleRestartClick = () => {
        dispatchGame({
            type: 'CLEAR_PLAYERS'
        });

        setIsWinModalOpen(false);
    };

    const handleCellClick = React.useCallback(( rowIndex: number, columnIndex: number) => {
        dispatchGame({
            type: 'UPDATE_PLAYER_GAME_DATA',
            payload: {
                playerId: currentPlayer.id,
                rowIndex,
                columnIndex
            }
        })

        setCurrentPlayer(getNextPlayer(currentPlayer, game.players));
    }, [currentPlayer, dispatchGame, game.players]);

    return (
        <GameScreen
            isWinModalOpen={isWinModalOpen}
            currentPlayer={currentPlayer}
            boardSize={game.boardSize}
            players={game.players}
            setIsWinModalOpen={setIsWinModalOpen}
            setCurrentScreen={setCurrentScreen}
            onCellClick={handleCellClick}
            onMenuClick={handleMenuClick}
            onRestartClick={handleRestartClick}
        />
    );
};

export default GameScreenContainer;