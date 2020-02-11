import * as React from 'react';

import * as S from './Cell.style';

interface IProps {
    color: string,
    onClick(): void
}

const Cell: React.FC<IProps> = ({ color, onClick }) => (
    <S.Cell color={color} onClick={onClick} />
);

export default Cell;