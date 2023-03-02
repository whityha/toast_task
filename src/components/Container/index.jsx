import React from 'react';
import ReactDOM from 'react-dom';
import Container from './styled';
import useContainer from '../../hooks/useContainer';
import Toast from '../Toast';
import CornerContainer from '../CornerContainer';

const ContainerToast = () => {
    const { deleteToast, toastPositionContainers } = useContainer();
    return ReactDOM.createPortal(
        <Container>
            {toastPositionContainers.map(([position, toastsParams]) => (
                <CornerContainer
                    key={`container-${position}`}
                    position={position}
                >
                    {toastsParams.map(({ id, ...toastParams }) => (
                        <Toast
                            key={id}
                            id={id}
                            deleteToast={deleteToast}
                            {...toastParams}
                        />
                    ))}
                </CornerContainer>
            ))}
        </Container>,
        document.body
    );
};

export default ContainerToast;
