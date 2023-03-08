import { ANIMATION, POSITION } from '../constants';
import Theme from '../theme/theme';

const getAnimation = (animationName, position) => {
    if (animationName === 'slide') {
        if (
            position === POSITION.TOP_LEFT ||
            position === POSITION.BOTTOM_LEFT
        ) {
            return Theme.animation[ANIMATION.SLIDE_LEFT];
        }
        if (
            position === POSITION.TOP_RIGHT ||
            position === POSITION.BOTTOM_RIGHT
        ) {
            return Theme.animation[ANIMATION.SLIDE_RIGHT];
        }
    }
    return Theme.animation[animationName];
};

export default getAnimation;
