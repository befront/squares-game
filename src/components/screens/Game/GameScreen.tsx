import * as React from 'react';

import { Screen } from '@components/core/Screen';

import { Cell } from  './components/Cell';
import { PlayerInfo } from './components/PlayerInfo';
import { WinModal } from './components/WinModal';

import { isCurrentPlayer, getCellColor, getWinPlayerName } from './GameScreen.utils';

import * as S from './GameScreen.style';

interface IProps {
    isWinModalOpen: boolean,
    boardSize: number,
    currentPlayer: PlayerType,
    players: PlayerType[],
    setIsWinModalOpen(isOpen: boolean): void,
    setCurrentScreen(screen: string): void
    onCellClick(row: number, column: number): void,
    onMenuClick(): void,
    onRestartClick(): void
};

const renderRows = (
    size: number,
    players: PlayerType[],
    onCellClick: (row: number, column: number) => void
) => 
    Array.from(Array(size)).map((value, rowIndex) => (
        <S.Row key={rowIndex}>
            { Array.from(Array(size)).map((value, columnIndex) => (
                <Cell
                    key={columnIndex}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    color={getCellColor(rowIndex, columnIndex, players)}
                    onClick={onCellClick}
                />
            ))}
        </S.Row>
    ));

const GameScreen: React.FC<IProps> = ({
    isWinModalOpen,
    boardSize,
    currentPlayer,
    players,
    setIsWinModalOpen,
    setCurrentScreen,
    onCellClick,
    onMenuClick,
    onRestartClick
}) => (
    <Screen>
        <WinModal
            isOpen={isWinModalOpen}
            playerName={getWinPlayerName(players)}
            setIsWinModalOpen={setIsWinModalOpen}
            setCurrentScreen={setCurrentScreen}
        />
        <S.Header>
            <S.PlayersInfo>
                { players.map((player) => (
                    <PlayerInfo
                        key={player.id}
                        {...player}
                        isCurrent={isCurrentPlayer(currentPlayer, player)}
                    />
                ))}
            </S.PlayersInfo>
        </S.Header>
        <S.Inner>
            <S.Board>
                { renderRows(boardSize, players, onCellClick) }
            </S.Board>
        </S.Inner>
        <S.Actions>
            <S.RestartButton onClick={onRestartClick}>Restart</S.RestartButton>
            <S.MenuButton onClick={onMenuClick}>Menu</S.MenuButton>
        </S.Actions>
    </Screen>
);

export default GameScreen;