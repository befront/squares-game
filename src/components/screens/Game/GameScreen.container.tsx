import * as React from 'react';

import { useGame } from '@context/Game';

import { getNextPlayer, getRandomPlayer, getPlayerPoints } from './GameScreen.utils';

import GameScreen from './GameScreen';

interface IProps {
    setCurrentScreen(screen: string): void
}

const GameScreenContainer: React.FC<IProps> = ({ setCurrentScreen }) => {
    const [game, dispatchGame] = useGame();

    const [isWinModalOpen, setIsWinModalOpen] = React.useState(false);
    const [selectedCells, setSelectedCells] = React.useState({});
    const [currentPlayer, setCurrentPlayer] = React.useState(getRandomPlayer(game.players));

    const handleCellClick = (rowIndex: number, columnIndex: number) => {
        const cellKey = `${rowIndex}:${columnIndex}`;

        const cells: CellsType = { ...selectedCells };

        if (!cells[cellKey]) {
            cells[cellKey] = {
                playerId: currentPlayer.id,
                rowIndex,
                columnIndex
            };;

            const playerCells: CellType[] = Object.values(cells).filter(cell => cell.playerId === currentPlayer.id);

            const points = getPlayerPoints(playerCells);

            if (!currentPlayer.points || (points > 1 && points !== currentPlayer.points)) {
                dispatchGame({
                    type: 'UPDATE_PLAYER_POINTS',
                    payload: {
                        playerId: currentPlayer.id,
                        points: !currentPlayer.points ? 1 : points
                    }
                })
            }

            setSelectedCells(cells);

            setCurrentPlayer(getNextPlayer(currentPlayer, game.players));
        }

        if (Object.keys(cells).length === game.boardSize * game.boardSize) {
            setIsWinModalOpen(true);
        }
    };

    return (
        <GameScreen
            isWinModalOpen={isWinModalOpen}
            currentPlayer={currentPlayer}
            selectedCells={selectedCells}
            boardSize={game.boardSize}
            players={game.players}
            setIsWinModalOpen={setIsWinModalOpen}
            setSelectedCells={setSelectedCells}
            setCurrentScreen={setCurrentScreen}
            onCellClick={handleCellClick}
        />
    );
};

export default GameScreenContainer;