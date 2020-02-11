import * as React from 'react';

import { SCREENS } from '@constants';

import StartScreen from './StartScreen';

interface IProps {
    setCurrentScreen(screen: string): void
}

const StartScreenContainer: React.FC<IProps> = ({ setCurrentScreen }) => {
    const handleStartClick = () => {
        setCurrentScreen(SCREENS.CREATE_BOARD);
    };
    
    return (
        <StartScreen
            onStartClick={handleStartClick}
        />
    );
};

export default StartScreenContainer;