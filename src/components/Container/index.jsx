import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import useContainer from '../../hooks/useContainer';
import Theme from '../../theme';
import ErrorBoundary from '../ErrorBoundary';
import Toast from '../Toast';
import { Container, PositionContainer } from './styled';

const Position = ({ position, children }) => (
    <PositionContainer position={Theme.position[position]}>
        {children}
    </PositionContainer>
);

const ContainerToast = () => {
    const { deleteToast, toastPositionContainers } = useContainer();
    return ReactDOM.createPortal(
        <ErrorBoundary>
            <Container>
                {toastPositionContainers.map(([position, toastsParams]) => (
                    <Position key={`container-${position}`} position={position}>
                        {toastsParams.map(({ id, ...toastParams }) => (
                            <Toast
                                key={id}
                                id={id}
                                deleteToast={deleteToast}
                                {...toastParams}
                            />
                        ))}
                    </Position>
                ))}
            </Container>
        </ErrorBoundary>,
        document.body
    );
};

Position.propTypes = {
    position: PropTypes.string,
    children: PropTypes.node,
};

export default ContainerToast;
