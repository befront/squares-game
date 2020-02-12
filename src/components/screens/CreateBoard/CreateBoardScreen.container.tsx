import * as React from 'react';

import { SCREENS } from '@constants';

import { useGameDispatch, useGameState } from '@context/Game';

import CreateBoard from './CreateBoardScreen';

interface IProps {
    setCurrentScreen(screen: string): void
}

const CreateBoardContainer: React.FC<IProps> = ({ setCurrentScreen }) => {
    const dispatchGame = useGameDispatch();
    const game = useGameState();

    const handleContinueClick = () => {
        if (game.boardSize >= 2 && game.boardSize <= 8) {
            setCurrentScreen(SCREENS.CREATE_PLAYERS);
        }
    };

    const handleSizeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        dispatchGame({
            type: 'SET_BOARD_SIZE',
            payload: {
                size: value
            }
        });
    };

    return (
        <CreateBoard
            boardSize={game.boardSize}
            onContinueClick={handleContinueClick}
            onSizeInputChange={handleSizeInputChange}
        />
    );
};

export default CreateBoardContainer;