import React from 'react';
import PropTypes from 'prop-types';

import useToast from '@/hooks/useToast';

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
    id,
    position,
    animationDuration,
}) => {
    const { isClosing, isForceClosing, closeToast, setIsForceClosing } =
        useToast({
            duration,
            id,
            animationDuration,
        });
    const forceCloseToast = () => closeToast(setIsForceClosing);
    return (
        <Wrapper
            data-test="toast"
            isClosing={isClosing}
            isForceClosing={isForceClosing}
            icon={icon}
            backgroundColor={backgroundColor}
            translate={translate}
            animation={animation}
            animationDuration={animationDuration}
            position={position}
        >
            <CloseButton
                disabled={isClosing}
                onClick={forceCloseToast}
                color={titleColor}
            />
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
    id: PropTypes.string,
    duration: PropTypes.number,
    animationDuration: PropTypes.number,
    animation: PropTypes.shape({
        open: PropTypes.shape({}),
        close: PropTypes.shape({}),
    }),
};

export default Toast;
