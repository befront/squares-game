import React from 'react';
import Modal from 'react-modal';

import { GameProvider } from './context/Game';

import { GlobalStyles } from './assets/styles/GlobalStyles';

import { ScreenSwitcher } from './components/core/ScreenSwitcher';

Modal.setAppElement('#squares-game');

const App = () => (
    <>
        <GlobalStyles />
        <GameProvider>
            <ScreenSwitcher />
        </GameProvider>        
    </>
);

export default App;