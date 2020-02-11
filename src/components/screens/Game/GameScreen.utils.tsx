import orderBy from 'lodash/orderBy';
import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';

export const isCurrentPlayer = (currentPlayer: PlayerType, player: PlayerType): boolean => currentPlayer.id === player.id;

export const getCellColor = (
    rowIndex: number,
    columnIndex: number,
    players: PlayersType,
    selectedCells: CellsType 
): string => {
    const cell = selectedCells[`${rowIndex}:${columnIndex}`];

    if (!cell) {
        return '#fff';
    }

    const player = players[cell.playerId];

    return player.color;
};

export const getRandomPlayer = (players: PlayersType): PlayerType => {
    const playersKeys = Object.keys(players);

    const randomKey = playersKeys[Math.floor(Math.random() * playersKeys.length)];

    return players[randomKey];
};

export const getNextPlayer = (currentPlayer: PlayerType, players: PlayerType): PlayerType => {
    const playersKeys = Object.keys(players);

    const nextPlayerIndex = playersKeys.indexOf(currentPlayer.id) + 1;

    if (nextPlayerIndex > 1) {
        return players[playersKeys[0]];
    }

    const nextPlayer = players[playersKeys[nextPlayerIndex]];

    return nextPlayer;
};

export const isCellIntersect = (prevCell: CellType, nextCell: CellType) : boolean => {
    return (
        (prevCell.rowIndex === nextCell.rowIndex && prevCell.columnIndex - 1 === nextCell.columnIndex)
            || (prevCell.rowIndex === nextCell.rowIndex && prevCell.columnIndex + 1 === nextCell.columnIndex)
            || (prevCell.rowIndex - 1 === nextCell.rowIndex && prevCell.columnIndex === nextCell.columnIndex)
            || (prevCell.rowIndex + 1 === nextCell.rowIndex && prevCell.columnIndex === nextCell.columnIndex)
    );
};


export const getIntersectCells = (cells: CellType[], cell: CellType) : CellType[] => {
    const intersectCells = [];

    for (let i = 0; i < cells.length; i++) {
        if (isCellIntersect(cells[i], cell)) {
            intersectCells.push(cells[i]);
        }
    }

    return intersectCells;
};

export const getPlayerPoints = (cells: CellType[]) : number => {
    let lines: Array<Array<string>> = [];

    const orderedCells = orderBy(cells, ['rowIndex', 'columnIndex'], 'asc');

    for (let i = 0; i < orderedCells.length; i++) {
        const cell = `${orderedCells[i].rowIndex}:${orderedCells[i].columnIndex}`;

        let line = [cell];
            
        const intersectCells = getIntersectCells(orderedCells, orderedCells[i]);

        const linesWithCell = lines.filter(item => item.indexOf(cell) > -1);

        if (linesWithCell.length > 0) {
            lines.push(uniq(
                flatten(linesWithCell)
                    .concat(intersectCells
                        .map(cell => `${cell.rowIndex}:${cell.columnIndex}`)
                    )
                )
            );

        } else {
            line = line.concat(intersectCells.map(cell => `${cell.rowIndex}:${cell.columnIndex}`));

            lines.push(line);
        }
    }

    return Math.max.apply(Math, lines.map(line => line.length));
};

export const getWinPlayerName = (players: PlayersType) : string => {
    const playersArr = Object.values(players);

    const maxPoints = Math.max.apply(Math, playersArr.map((player) => player.points));

    const playersWithMaxPoints = playersArr.filter(player => player.points === maxPoints);

    if (playersWithMaxPoints.length === 2) {
        return '';
    }

    return playersWithMaxPoints[0].name;
};