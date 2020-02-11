import * as React from 'react';

import { SCREENS } from '@constants';

import { useGame } from '@context/Game';

import WinModal from './WinModal';

interface IProps {
    isOpen: boolean,
    playerName: string,
    setSelectedCells(cells: CellsType): void,
    setIsWinModalOpen(isOpen: boolean): void,
    setCurrentScreen(screen: string): void
}

const WinModalContainer: React.FC<IProps> = ({
    setSelectedCells,
    setIsWinModalOpen,
    setCurrentScreen,
    ...props
}) => {
    const [, dispatchGame] = useGame();

    const handleMenuClick = () => {
        dispatchGame({
            type: 'CLEAR_PLAYERS'
        });

        setSelectedCells({});
        setCurrentScreen(SCREENS.START);
    };

    const handleRestartClick = () => {
        dispatchGame({
            type: 'CLEAR_PLAYERS'
        });

        setSelectedCells({});
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