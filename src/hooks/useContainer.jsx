import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import toastInstance from '../utils/controller';
import makePositionContainers from '../utils/makePositionContainers';

const useContainer = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);

    useImperativeHandle(ref, () => ({
        setToastsList: (toastsParameters = []) => {
            setToasts([...toastsParameters]);
        },
    }));

    useEffect(() => {
        toastInstance.toastContainer = ref.current;
    }, [toasts]);

    const toastPositionContainers = makePositionContainers([...toasts]);

    return {
        toastPositionContainers,
    };
};

export default useContainer;
