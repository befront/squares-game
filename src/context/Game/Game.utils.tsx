import orderBy from 'lodash/orderBy';
import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';

export const getRandomColor = () : string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

export const isCellIntersect = (prevCell: string, nextCell: string) : boolean => {
    const [prevRowIndex, prevColumnIndex] = prevCell.split(':');
    const [nextRowIndex, nextColumnIndex] = nextCell.split(':');

    return (
        (+prevRowIndex === +nextRowIndex && +prevColumnIndex - 1 === +nextColumnIndex)
            || (+prevRowIndex === +nextRowIndex && +prevColumnIndex + 1 === +nextColumnIndex)
            || (+prevRowIndex - 1 === +nextRowIndex && +prevColumnIndex === +nextColumnIndex)
            || (+prevRowIndex + 1 === +nextRowIndex && +prevColumnIndex === +nextColumnIndex)
    );
};


export const getIntersectCells = (cells: string[], cell: string) : string[] => {
    const intersectCells = [];

    for (let i = 0; i < cells.length; i++) {
        if (isCellIntersect(cells[i], cell)) {
            intersectCells.push(cells[i]);
        }
    }

    return intersectCells;
};

export const getPlayerPoints = (cells: string[]) : number => {
    let lines: Array<Array<string>> = [];

    const orderedCells = orderBy(cells, 'asc');

    for (let i = 0; i < orderedCells.length; i++) {
        const cell = orderedCells[i];

        let line = [cell];
            
        const intersectCells = getIntersectCells(orderedCells, orderedCells[i]);

        const linesWithCell = lines.filter(item => item.indexOf(cell) > -1);

        if (linesWithCell.length > 0) {
            lines.push(uniq(flatten(linesWithCell).concat(intersectCells)));
        } else {
            line = line.concat(intersectCells);

            lines.push(line);
        }
    }

    return Math.max.apply(Math, lines.map(line => line.length));
};