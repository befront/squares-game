import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: "RobotoRegular";
        src: url("../fonts/Roboto-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "RobotoMedium";
        src: url("../fonts/Roboto-Medium.ttf") format("truetype");
    }

    @font-face {
        font-family: "RobotoBold";
        src: url("../fonts/Roboto-Bold.ttf") format("truetype");
    }
`;