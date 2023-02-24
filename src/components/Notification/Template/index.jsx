import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper, Description } from './styled';

const Template = ({ title, description, ...props }) => (
    <Wrapper {...props}>
        <Title {...props}>{title}</Title>
        <Description {...props}>{description}</Description>
    </Wrapper>
);

Template.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(['default', 'error', 'success', 'info']),
    gap: PropTypes.number,
};

export default Template;
