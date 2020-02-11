import * as React from 'react';

import { Screen } from '@components/core/Screen';

import * as S from './StartScreen.style';

interface IProps {
    onStartClick(): void
}

const StartScreen: React.FC<IProps> = ({ onStartClick }) => (
    <Screen>
        <S.Inner>
            <S.StartButton onClick={onStartClick} >Start Game</S.StartButton>
        </S.Inner>
    </Screen>
);

export default StartScreen;