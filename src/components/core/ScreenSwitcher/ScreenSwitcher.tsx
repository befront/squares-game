import * as React from 'react';

import { SCREENS } from '@constants';

import { StartScreen } from '@components/screens/StartScreen';
import { CreateBoardScreen } from '@components/screens/CreateBoard';
import { CreatePlayersScreen } from '@components/screens/CreatePlayers';
import { GameScreen } from '@components/screens/Game';

interface IProps {
    currentScreen: string,
    setCurrentScreen: React.Dispatch<string>
};

const ScreenSwitcher: React.FC<IProps> = ({ currentScreen, setCurrentScreen }) => {
    switch (currentScreen) {
        case SCREENS.START: {
            return (
                <StartScreen
                    setCurrentScreen={setCurrentScreen}
                />
            );
        }
        case SCREENS.CREATE_BOARD: {
            return (
                <CreateBoardScreen
                    setCurrentScreen={setCurrentScreen}
                />
            )
        }
        case SCREENS.CREATE_PLAYERS: {
            return (
                <CreatePlayersScreen
                    setCurrentScreen={setCurrentScreen}
                />
            )
        }
        case SCREENS.GAME: {
            return (
                <GameScreen
                    setCurrentScreen={setCurrentScreen}
                />
            )
        }
    }

    return null;
};

export default ScreenSwitcher;