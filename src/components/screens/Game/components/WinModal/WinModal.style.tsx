import styled from 'styled-components';
import Modal from 'react-modal';

import { Button } from '@components/core/Button';

export const WinModal = styled(Modal)`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    margin-top: -150px;
    left: 50%;
    margin-left: -200px;
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.p`
    font-family: "RobotoBold", sans-serif;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
    color: #131220;
`;

export const Text = styled.p`
    margin-top: 25px;
    font-family: "RobotoBold", sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: #131220;
`;

export const RestartButton = styled(Button)`
    margin-top: 20px;
`;

export const MenuButton = styled(Button)`
    margin-top: 10px;
`;