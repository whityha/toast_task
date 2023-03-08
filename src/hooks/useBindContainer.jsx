import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import toastInstance from '../utils/controller';

const useBindContainer = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);

    useImperativeHandle(ref, () => ({
        setToastsList: (toastsParameters = []) => {
            setToasts([...toastsParameters]);
        },
    }));

    useEffect(() => {
        toastInstance.toastContainer = ref.current;
    }, []);

    return {
        toasts,
    };
};

export default useBindContainer;
