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
        'left-top': {
            left: 20,
            top: 20,
        },
        'right-top': {
            right: 20,
            top: 20,
        },
        'left-bottom': {
            left: 20,
            bottom: 20,
        },
        'right-bottom': {
            right: 20,
            bottom: 20,
        },
    },
};

export default Theme;
