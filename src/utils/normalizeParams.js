import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from '../constants';
import Theme from '../theme/theme';

import getAnimation from './getAnimation';

export default (customParams) => {
    const {
        title,
        type,
        description,
        backgroundColor,
        titleColor,
        descriptionColor,
        animation,
        position,
        ...props
    } = customParams;
    const normalizeParams = {
        title:
            title.length > MAX_TITLE_LENGTH
                ? `${title.slice(0, MAX_TITLE_LENGTH)}...`
                : title,
        description:
            description.length > MAX_DESCRIPTION_LENGTH
                ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
                : description,

        backgroundColor: backgroundColor || Theme[type].backgroundColor,
        titleColor: titleColor || Theme[type].titleColor,
        descriptionColor: descriptionColor || Theme[type].descriptionColor,

        icon: Theme[type].icon,
        animation: getAnimation(animation, position),
        position,

        ...props,
    };
    return normalizeParams;
};
