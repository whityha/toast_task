import PropTypes from 'prop-types';
import React from 'react';

import useToast from '../../hooks/useToast';
import { CloseButton, Description, Title, Wrapper } from './styled';

const Toast = ({
    titleColor,
    title,
    description,
    descriptionColor,
    backgroundColor,
    translate,
    animation,
    icon,
    duration,
    deleteToast,
    id,
    animationDuration,
}) => {
    const { isClosing, animatedToastDelete } = useToast({
        duration,
        deleteToast,
        id,
        animationDuration,
    });

    return (
        <Wrapper
            data-test="toast"
            isClosing={isClosing}
            icon={icon}
            backgroundColor={backgroundColor}
            translate={translate}
            animation={animation}
            animationDuration={animationDuration}
        >
            <CloseButton disabled={isClosing} onClick={animatedToastDelete} />
            <Title color={titleColor}>{title}</Title>
            <Description color={descriptionColor}>{description}</Description>
        </Wrapper>
    );
};

Toast.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,

    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionColor: PropTypes.string,
    icon: PropTypes.string,

    translate: PropTypes.shape({
        translateX: PropTypes.string,
        translateY: PropTypes.string,
    }),
    deleteToast: PropTypes.func,
    id: PropTypes.string,
    duration: PropTypes.number,
    animationDuration: PropTypes.number,
    animation: PropTypes.shape({
        open: PropTypes.shape({}),
        close: PropTypes.shape({}),
    }),
};

export default Toast;
