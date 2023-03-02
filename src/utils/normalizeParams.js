import Theme from '../theme';
import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from '../constants';

export default (customParams) => {
    const {
        title,
        type,
        description,
        backgroundColor,
        titleColor,
        descriptionColor,
        position,
        positionOptions,
        animation,
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
        position: positionOptions || Theme.position[position],

        backgroundColor: backgroundColor || Theme[type].backgroundColor,
        titleColor: titleColor || Theme[type].titleColor,
        descriptionColor: descriptionColor || Theme[type].descriptionColor,

        icon: Theme[type].icon,
        animationDuration: Theme.animationDuration,
        animation: Theme.animation[animation],

        ...props,
    };
    return normalizeParams;
};
