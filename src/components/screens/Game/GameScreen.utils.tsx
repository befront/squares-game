export const isCurrentPlayer = (currentPlayer: PlayerType, player: PlayerType): boolean => currentPlayer.id === player.id;

export const getCellColor = (
    rowIndex: number,
    columnIndex: number,
    players: PlayerType[],
): string => {
    const player = players.find(item => item.cells.indexOf(`${rowIndex}:${columnIndex}`) > -1);

    if (!player) {
        return '#fff';
    }

    return player.color;
};

export const getRandomPlayer = (players: PlayerType[]): PlayerType => {
    return players[Math.floor(Math.random() * players.length)];
};

export const getNextPlayer = (currentPlayer: PlayerType, players: PlayerType[]): PlayerType => {
    const nextPlayerIndex = players.findIndex(player => player.id === currentPlayer.id) + 1;

    if (nextPlayerIndex > players.length - 1) {
        return players[0];
    }

    const nextPlayer = players[nextPlayerIndex];

    return nextPlayer;
};

export const getWinPlayerName = (players: PlayerType[]) : string => {
    const maxPoints = Math.max.apply(Math, players.map((player) => player.points));

    const playersWithMaxPoints = players.filter(player => player.points === maxPoints);

    if (playersWithMaxPoints.length === 2) {
        return '';
    }

    return playersWithMaxPoints[0].name;
};