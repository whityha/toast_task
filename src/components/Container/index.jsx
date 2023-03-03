import React from 'react';
import ReactDOM from 'react-dom';
import useContainer from '@/hooks/useContainer';
import Theme from '@/theme';
import { Container, CornerContainer } from './styled';
import Toast from '../Toast';
import ErrorBoundary from '../ErrorBoundary';

const Corner = ({ position, children }) => (
    <CornerContainer position={Theme.position[position]}>
        {children}
    </CornerContainer>
);

const ContainerToast = () => {
    const { deleteToast, toastPositionContainers } = useContainer();
    return ReactDOM.createPortal(
        <ErrorBoundary>
            <Container>
                {toastPositionContainers.map(([position, toastsParams]) => (
                    <Corner key={`container-${position}`} position={position}>
                        {toastsParams.map(({ id, ...toastParams }) => (
                            <Toast
                                key={id}
                                id={id}
                                deleteToast={deleteToast}
                                {...toastParams}
                            />
                        ))}
                    </Corner>
                ))}
            </Container>
        </ErrorBoundary>,
        document.body
    );
};

export default ContainerToast;
