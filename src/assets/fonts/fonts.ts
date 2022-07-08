import { createGlobalStyle } from "styled-components";
import RobotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'RobotoRegular';
        src: local('RobotoRegular'),
        url(${RobotoRegular}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'RobotoMedium';
        src: local('RobotoMedium'),
        url(${RobotoMedium}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'RobotoBlack';
        src: local('RobotoBlack'),
        url(${RobotoBlack}) format('truetype');
        font-weight: 900;
    }
`;
