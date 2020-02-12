import * as React from 'react';

import { SCREENS } from '@constants';

import { useGameDispatch } from '@context/Game';

import WinModal from './WinModal';

interface IProps {
    isOpen: boolean,
    playerName: string,
    setIsWinModalOpen(isOpen: boolean): void,
    setCurrentScreen(screen: string): void
}

const WinModalContainer: React.FC<IProps> = ({
    setIsWinModalOpen,
    setCurrentScreen,
    ...props
}) => {
    const dispatchGame = useGameDispatch();

    const handleMenuClick = () => {
        dispatchGame({
            type: 'CLEAR_PLAYERS'
        });

        setCurrentScreen(SCREENS.START);
    };

    const handleRestartClick = () => {
        dispatchGame({
            type: 'CLEAR_PLAYERS'
        });

        setIsWinModalOpen(false);
    };

    return (
        <WinModal
            {...props}
            onRestartClick={handleRestartClick}
            onMenuClick={handleMenuClick}
        />
    )
}

export default WinModalContainer;