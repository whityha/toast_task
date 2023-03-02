import React from 'react';
import ReactDOM from 'react-dom';
import Container from './styled';
import useContainer from '../../hooks/useContainer';
import Toast from '../Toast';

const ContainerToast = () => {
    const { toastList, deleteToast } = useContainer();
    return ReactDOM.createPortal(
        <Container>
            {toastList.map((toastParams) => {
                if (toastParams) {
                    const { id } = toastParams;
                    return (
                        <Toast
                            key={id}
                            deleteToast={deleteToast}
                            {...toastParams}
                        />
                    );
                }
                return null;
            })}
        </Container>,
        document.body
    );
};

export default ContainerToast;
