import * as React from 'react';

import * as S from './Screen.style';

interface IProps {
    children: React.ReactNode
}

const Screen: React.FC<IProps> = ({ children }) => (
    <S.Screen>
        <S.Inner>
            { children }
        </S.Inner>
    </S.Screen>
)

export default Screen;