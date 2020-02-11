import * as React from 'react';

import * as S from './PlayerInfo.style';

interface IProps {
    isCurrent: boolean,
    name: string,
    color: string,
    points: number
}

const PlayerInfo: React.FC<IProps> = ({ isCurrent, name, color, points }) => (
    <S.PlayerInfo>
        <S.Content>
            <S.Name>{ name }: </S.Name>
            <S.Points>{ points }</S.Points>
        </S.Content>
        { isCurrent && (
            <S.Mark color={color} />
        )}
    </S.PlayerInfo>
);

export default PlayerInfo;