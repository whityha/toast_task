import React from 'react';
import Container from './styled';
import Theme from '../../theme';

const CornerContainer = ({ position, children }) => (
    <Container position={Theme.position[position]}>{children}</Container>
);

export default CornerContainer;
