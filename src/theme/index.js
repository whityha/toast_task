import { bubble, bubbleClose, opacity, opacityClose } from './animations';
import { COLORS, ICONS } from './config';

const { white, red, green, purple, blue } = COLORS;
const { error, success, info } = ICONS;

const Theme = {
    default: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: blue,
        icon: info,
    },
    error: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: red,
        icon: error,
    },
    info: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: purple,
        icon: info,
    },
    success: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: green,
        icon: success,
    },
    position: {
        'top-left': {
            left: 20,
            top: 20,
        },
        'top-right': {
            right: 20,
            top: 20,
        },
        'bottom-left': {
            left: 20,
            bottom: 20,
        },
        'bottom-right': {
            right: 20,
            bottom: 20,
        },
    },
    animationDuration: 500,
    animation: {
        opacity: {
            open: opacity,
            close: opacityClose,
        },
        bubble: {
            open: bubble,
            close: bubbleClose,
        },
    },
};

export default Theme;
