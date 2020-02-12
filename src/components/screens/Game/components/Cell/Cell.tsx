import * as React from 'react';

import * as S from './Cell.style';

interface IProps {
    color: string,
    rowIndex: number,
    columnIndex: number,
    onClick(rowIndex: number, columnIndex: number): void
}

const Cell: React.FC<IProps> = React.memo(({ rowIndex, columnIndex, color, onClick }) => {
    console.log('render cell');

    return (
        <S.Cell
            color={color}
            onClick={() => { onClick(rowIndex, columnIndex); }}
        />
    );
});

export default Cell;