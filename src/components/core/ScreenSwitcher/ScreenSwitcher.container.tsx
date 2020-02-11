import * as React from 'react';

import { SCREENS } from '@constants';

import ScreenSwitcher from './ScreenSwitcher';

const ScreenSwitcherContainer = ()  => {
    const [currentScreen, setCurrentScreen] = React.useState(SCREENS.START);

    return (
        <ScreenSwitcher
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
        />
    );
}

export default ScreenSwitcherContainer;