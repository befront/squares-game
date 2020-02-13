import * as React from 'react';

import { SCREENS } from '@constants';

import { useGameDispatch, useGameState } from '@context/Game';

import { PLAYERS_COUNT } from './CreatePlayersScreen.constants';

import { hasPlayersNames, hasSamePlayerNames } from './CreatePlayersScreen.utils';

import CreatePlayersScreen from './CreatePlayersScreen';

interface IProps {
    setCurrentScreen(screen: string): void
}

const CreatePlayersScreenContainer: React.FC<IProps> = ({ setCurrentScreen }) => {
    const dispatchGame = useGameDispatch();
    const game = useGameState();

    React.useEffect(() => {
        if (!game.players.length) {
            for (let i = 0; i < PLAYERS_COUNT; i++) {
                dispatchGame({
                    type: 'CREATE_PLAYER'
                });
            }
        }
    }, [dispatchGame, game.players]);
    
    const handleContinueClick = () => {
        if (hasPlayersNames(game.players) && !hasSamePlayerNames(game.players)) {
            setCurrentScreen(SCREENS.GAME);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        dispatchGame({
            type: 'UPDATE_PLAYER',
            payload: {
                playerId: name,
                name: value
            }
        });
    };

    const handleAddPlayerClick = () => {
        dispatchGame({
            type: 'CREATE_PLAYER'
        });
    };

    return (
        <CreatePlayersScreen
            players={game.players}
            onInputChange={handleInputChange}
            onContinueClick={handleContinueClick}
            onAddPlayerClick={handleAddPlayerClick}
        />
    );
};

export default CreatePlayersScreenContainer;