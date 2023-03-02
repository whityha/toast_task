import React from 'react';
import PropTypes from 'prop-types';
import useToast from '../../hooks/useToast';
import { Title, Wrapper, Description, CloseButton } from './styled';

const Toast = (props) => {
    const { title, description, duration, deleteToast, id, animationDuration } =
        props;

    const { isClosing, animatedToastDelete } = useToast({
        duration,
        deleteToast,
        id,
        animationDuration,
    });

    return (
        <Wrapper isClosing={isClosing} {...props}>
            <CloseButton disabled={isClosing} onClick={animatedToastDelete} />
            <Title {...props}>{title}</Title>
            <Description {...props}>{description}</Description>
        </Wrapper>
    );
};

Toast.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(['default', 'error', 'success', 'info']),
    position: PropTypes.shape({
        left: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        top: PropTypes.number,
    }),

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

export default Toast;
