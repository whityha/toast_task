import React from 'react';
import PropTypes from 'prop-types';
import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from '../../constants';
import Theme from '../../theme';
import Template from './Template';

const Notification = ({
    title,
    description,
    type,
    backgroundColor,
    titleColor,
    descriptionColor,
    position,
    positionOptions,
}) => {
    const templateSettings = {
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
    };
    return <Template {...templateSettings} />;
};

Notification.defaultProps = {
    title: 'Заголовок',
    description: 'Текст уведомления по умолчанию',
    type: 'default',
    position: 'left-top',
};

Notification.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(['default', 'error', 'success', 'info']),
    position: PropTypes.oneOf([
        'left-top',
        'right-top',
        'left-bottom',
        'right-bottom',
    ]),

    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string,
    positionOptions: PropTypes.shape({
        left: PropTypes.number,
        right: PropTypes.number,
        top: PropTypes.number,
        bottom: PropTypes.number,
    }),
};

export default Notification;
