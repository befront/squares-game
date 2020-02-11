import * as React from 'react';

import { Screen } from '@components/core/Screen';

import { Cell } from  './components/Cell';
import { PlayerInfo } from './components/PlayerInfo';
import { WinModal } from './components/WinModal';

import { isCurrentPlayer, getCellColor, getWinPlayerName } from './GameScreen.utils';

import * as S from './GameScreen.style';

interface IProps {
    isWinModalOpen: boolean,
    selectedCells: CellsType,
    boardSize: number,
    currentPlayer: PlayerType,
    players: PlayersType,
    setSelectedCells(cells: CellsType): void,
    setIsWinModalOpen(isOpen: boolean): void,
    setCurrentScreen(screen: string): void
    onCellClick(row: number, column: number): void
};

const renderRows = (
    size: number,
    selectedCells: CellsType,
    players: PlayersType,
    onCellClick: (row: number, column: number) => void
) => 
    Array.from(Array(size)).map((value, rowIndex) => (
        <S.Row key={rowIndex}>
            { Array.from(Array(size)).map((value, columnIndex) => (
                <Cell
                    key={columnIndex}
                    color={getCellColor(rowIndex, columnIndex, players, selectedCells)}
                    onClick={() => { onCellClick(rowIndex, columnIndex) }}
                />
            ))}
        </S.Row>
    ));

const GameScreen: React.FC<IProps> = ({
    isWinModalOpen,
    selectedCells,
    boardSize,
    currentPlayer,
    players,
    setSelectedCells,
    setIsWinModalOpen,
    setCurrentScreen,
    onCellClick
}) => (
    <Screen>
        <WinModal
            isOpen={isWinModalOpen}
            playerName={getWinPlayerName(players)}
            setSelectedCells={setSelectedCells}
            setIsWinModalOpen={setIsWinModalOpen}
            setCurrentScreen={setCurrentScreen}
        />
        <S.Header>
            { Object.keys(players).map((playerId) => (
                <PlayerInfo
                    key={playerId}
                    {...players[playerId]}
                    isCurrent={isCurrentPlayer(currentPlayer, players[playerId])}
                />
            ))}
        </S.Header>
        <S.Inner>
            <S.Board>
                { renderRows(boardSize, selectedCells, players, onCellClick) }
            </S.Board>
        </S.Inner>
    </Screen>
);

export default GameScreen;