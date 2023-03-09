import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import toastServices from '../utils/ServiсeSingleton';

const useBindContainer = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);

    useImperativeHandle(ref, () => ({
        setToastsList: (toastsParameters = []) => {
            setToasts([...toastsParameters]);
        },
    }));

    useEffect(() => {
        toastServices.toastContainer = ref.current;
    }, []);

    return {
        toasts,
    };
};

export default useBindContainer;
