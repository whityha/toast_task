import { ANIMATION, POSITION, TYPE } from '../constants';
import { bubble, bubbleClose, opacity, opacityClose } from './animations';
import { COLORS, ICONS } from './config';

const { white, red, green, purple, blue, yellow } = COLORS;
const { error, success, info, warning } = ICONS;

const Theme = {
    [TYPE.DEFAULT]: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: blue,
        icon: info,
    },
    [TYPE.WARNING]: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: yellow,
        icon: warning,
    },
    [TYPE.ERROR]: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: red,
        icon: error,
    },
    [TYPE.INFO]: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: purple,
        icon: info,
    },
    [TYPE.SUCCESS]: {
        titleColor: white,
        descriptionColor: white,
        backgroundColor: green,
        icon: success,
    },
    position: {
        [POSITION.TOP_LEFT]: {
            left: 20,
            top: 20,
        },
        [POSITION.TOP_RIGHT]: {
            right: 20,
            top: 20,
        },
        [POSITION.BOTTOM_LEFT]: {
            left: 20,
            bottom: 20,
        },
        [POSITION.BOTTOM_RIGHT]: {
            right: 20,
            bottom: 20,
        },
    },
    animationDuration: 500,
    animation: {
        [ANIMATION.OPACITY]: {
            open: opacity,
            close: opacityClose,
        },
        [ANIMATION.BUBBLE]: {
            open: bubble,
            close: bubbleClose,
        },
    },
};

export default Theme;
