import * as React from 'react';

import * as S from './WinModal.style';

interface IProps {
    isOpen: boolean,
    playerName: string,
    onRestartClick(): void,
    onMenuClick(): void
}

const WinModal: React.FC<IProps> = ({ isOpen, playerName, onRestartClick, onMenuClick }) => (
    <S.WinModal isOpen={isOpen}>
        <S.Title>Congratulations</S.Title>
        { !playerName ? (
            <S.Text>DRAW!</S.Text>
        ) : (
            <S.Text>{ playerName } WIN!</S.Text>
        )}
        <S.RestartButton onClick={onRestartClick}>Restart</S.RestartButton>
        <S.MenuButton onClick={onMenuClick}>Menu</S.MenuButton>
    </S.WinModal>
);

export default WinModal;