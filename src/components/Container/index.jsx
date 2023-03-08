import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import useBindContainer from '../../hooks/useBindContainer';
import Theme from '../../theme/theme';
import makePositionContainers from '../../utils/makePositionContainers';
import ErrorBoundary from '../ErrorBoundary';
import Toast from '../Toast';

import { Wrapper, WrapperPosition } from './styled';

const PositionContainer = ({ position, children }) => (
    <WrapperPosition position={Theme.position[position]}>
        {children}
    </WrapperPosition>
);

const ContainerToast = () => {
    const { toasts } = useBindContainer();
    const toastPositionContainers = makePositionContainers([...toasts]);

    return ReactDOM.createPortal(
        <ErrorBoundary>
            <Wrapper>
                {toastPositionContainers.map(([position, toastsParams]) => (
                    <PositionContainer
                        key={`container-${position}`}
                        position={position}
                    >
                        {toastsParams.map(({ id, ...toastParams }) => (
                            <Toast key={id} id={id} {...toastParams} />
                        ))}
                    </PositionContainer>
                ))}
            </Wrapper>
        </ErrorBoundary>,
        document.body
    );
};

PositionContainer.propTypes = {
    position: PropTypes.string,
    children: PropTypes.node,
};

export default ContainerToast;
