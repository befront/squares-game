import React from 'react';

import { Fonts } from './Fonts';
import { MainStyles } from './MainStyles';
import { ResetStyles } from './ResetStyles';

export const GlobalStyles = () => (
    <>
        <ResetStyles />
        <MainStyles />
        <Fonts />
    </>
);