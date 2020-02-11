import * as React from 'react';

import { SCREENS } from '@constants';

import { useGame } from '@context/Game';

import { PLAYERS_COUNT } from './CreatePlayersScreen.constants';

import { hasPlayersNames } from './CreatePlayers.utils';

import CreatePlayersScreen from './CreatePlayersScreen';

interface IProps {
    setCurrentScreen(screen: string): void
}

const CreatePlayersScreenContainer: React.FC<IProps> = ({ setCurrentScreen }) => {
    const [game, dispatchGame] = useGame();

    React.useEffect(() => {
        if (!Object.keys(game.players).length) {
            for (let i = 0; i < PLAYERS_COUNT; i++) {
                dispatchGame({
                    type: 'CREATE_PLAYER'
                });
            }
        }
    }, [dispatchGame, game.players]);
    
    const handleContinueClick = () => {
        if (hasPlayersNames(game.players)) {
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

    return (
        <CreatePlayersScreen
            players={game.players}
            onInputChange={handleInputChange}
            onContinueClick={handleContinueClick}
        />
    );
};

export default CreatePlayersScreenContainer;