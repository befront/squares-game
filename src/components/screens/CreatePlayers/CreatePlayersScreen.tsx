import * as React from 'react';

import { Screen } from '@components/core/Screen';
import { Text } from '@components/core/Text';
import { Input } from '@components/core/Input';
import { FormControl } from '@components/core/FormControl';

import { hasPlayersNames } from './CreatePlayers.utils';

import * as S from './CreatePlayersScreen.style';

interface IProps {
    players: PlayersType,
    onInputChange(event: React.ChangeEvent<HTMLInputElement>): void,
    onContinueClick(): void
};

const CreatePlayersScreen: React.FC<IProps> = ({
    players,
    onInputChange,
    onContinueClick
}) => (
    <Screen>
        <S.Inner>
            <Text>Please add to players to start</Text>
            <S.Content>
                { Object.keys(players).map((playerId, index) => (
                    <FormControl key={playerId} label={`Player ${index + 1} Name`}>
                        <Input name={playerId} value={players[playerId].name} onChange={onInputChange} />
                    </FormControl>
                ))}
            </S.Content>
            <S.ContinueButton disabled={!hasPlayersNames(players)} onClick={onContinueClick}>Continue</S.ContinueButton>
        </S.Inner>
    </Screen>
);

export default CreatePlayersScreen;