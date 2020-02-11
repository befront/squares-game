import * as React from 'react';

import { Screen } from '@components/core/Screen';
import { Text } from '@components/core/Text';

import * as S from './CreateBoardScreen.style';

interface IProps {
    boardSize: number,
    onContinueClick() : void,
    onSizeInputChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const CreateBoardScreen: React.FC<IProps> = ({
    boardSize,
    onSizeInputChange,
    onContinueClick
}) => (
    <Screen>
        <S.Inner>
            <Text>Please, choose size for the board</Text>
            <S.SizeInput value={boardSize} onChange={onSizeInputChange} />
            <S.ContinueButton
                disabled={boardSize < 2 || boardSize > 8}
                onClick={onContinueClick}
            >
                    Continue
            </S.ContinueButton>
        </S.Inner>
    </Screen>
);

export default CreateBoardScreen;