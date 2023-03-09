import { ANIMATION, POSITION, TYPE } from '../constants';

import {
    bubble,
    bubbleClose,
    opacity,
    opacityClose,
    slideCloseLeft,
    slideCloseRight,
    slideOpenLeft,
    slideOpenRight,
} from './animations';
import { COLORS, ICONS } from './config';

const { white, red, green, purple, blue, yellow } = COLORS;
const { error, success, info, warning } = ICONS;

const generalColors = {
    titleColor: white,
    descriptionColor: white,
};

const Theme = {
    [TYPE.DEFAULT]: {
        ...generalColors,
        backgroundColor: blue,
        icon: info,
    },
    [TYPE.WARNING]: {
        ...generalColors,
        backgroundColor: yellow,
        icon: warning,
    },
    [TYPE.ERROR]: {
        ...generalColors,
        backgroundColor: red,
        icon: error,
    },
    [TYPE.INFO]: {
        ...generalColors,
        backgroundColor: purple,
        icon: info,
    },
    [TYPE.SUCCESS]: {
        ...generalColors,
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
        [ANIMATION.SLIDE_RIGHT]: {
            open: slideOpenRight,
            close: slideCloseRight,
        },
        [ANIMATION.SLIDE_LEFT]: {
            open: slideOpenLeft,
            close: slideCloseLeft,
        },
    },
    width: {
        min: 200,
        medium: 250,
        max: 300,
    },
    height: {
        min: 60,
        medium: 70,
        max: 80,
    },
    closeButtonSize: {
        min: 10,
        medium: 15,
        max: 20,
    },
    fontSize: {
        min: 14,
        max: 20,
    },
    borderRadius: {
        min: 10,
        medium: 20,
        max: 30,
    },
    margin: {
        m0: 0,
        m1: 10,
        m2: 20,
        m3: 30,
        m4: 40,
        m5: 50,
    },
    padding: {
        p0: 0,
        p1: 10,
        p2: 20,
        p3: 30,
        p4: 40,
        p5: 50,
        p6: 60,
    },
    closePosition: {
        right: 10,
        top: 10,
        left: 0,
        bottom: 0,
    },
    resetSettings(type = false) {
        switch (type) {
            case TYPE.ERROR:
                Theme[TYPE.ERROR] = {
                    ...generalColors,
                    backgroundColor: red,
                    icon: error,
                };
                break;
            case TYPE.WARNING:
                Theme[TYPE.WARNING] = {
                    ...generalColors,
                    backgroundColor: yellow,
                    icon: warning,
                };
                break;
            case TYPE.INFO:
                Theme[TYPE.INFO] = {
                    ...generalColors,
                    backgroundColor: purple,
                    icon: info,
                };
                break;
            case TYPE.SUCCESS:
                Theme[TYPE.SUCCESS] = {
                    ...generalColors,
                    backgroundColor: green,
                    icon: success,
                };
                break;
            default: {
                Theme[TYPE.DEFAULT] = {
                    ...generalColors,
                    backgroundColor: blue,
                    icon: info,
                };
            }
        }
    },
};

export default Theme;
