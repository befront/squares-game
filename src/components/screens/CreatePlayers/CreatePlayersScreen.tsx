import * as React from 'react';

import { Screen } from '@components/core/Screen';
import { Text } from '@components/core/Text';
import { Input } from '@components/core/Input';
import { FormControl } from '@components/core/FormControl';

import { hasPlayersNames, hasSamePlayerNames } from './CreatePlayersScreen.utils';

import * as S from './CreatePlayersScreen.style';

interface IProps {
    players: PlayerType[],
    onInputChange(event: React.ChangeEvent<HTMLInputElement>): void,
    onAddPlayerClick(): void,
    onContinueClick(): void
};

const CreatePlayersScreen: React.FC<IProps> = ({
    players,
    onInputChange,
    onAddPlayerClick,
    onContinueClick
}) => (
    <Screen>
        <S.Inner>
            <Text>Please add to players to start</Text>
            <S.Content>
                { players.map((player, index) => (
                    <FormControl key={player.id} label={`Player ${index + 1} Name`}>
                        <Input name={player.id} value={player.name} onChange={onInputChange} />
                    </FormControl>
                ))}
            </S.Content>
            <S.AddPlayerButton onClick={onAddPlayerClick}>Add Player</S.AddPlayerButton>
            <S.ContinueButton disabled={!hasPlayersNames(players) || hasSamePlayerNames(players)} onClick={onContinueClick}>Continue</S.ContinueButton>
        </S.Inner>
    </Screen>
);

export default CreatePlayersScreen;