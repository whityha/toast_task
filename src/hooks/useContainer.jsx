import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import uuid from 'uuid4';

import { MAX_TOAST_TOGETHER } from '../constants';
import toastInstance from '../utils/controller';
import makePositionContainers from '../utils/makePositionContainers';

const useContainer = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);

    useImperativeHandle(ref, () => ({
        addToastInList: (toastParams) =>
            setToasts((prevToasts) =>
                prevToasts.length < MAX_TOAST_TOGETHER
                    ? [
                          ...prevToasts,
                          {
                              ...toastParams,
                              id: uuid(),
                          },
                      ]
                    : prevToasts
            ),
    }));

    const deleteToast = (id) => {
        setToasts((prevToasts) =>
            [...prevToasts].filter((toast) => toast.id !== id)
        );
    };

    useEffect(() => {
        toastInstance.toastContainer = ref.current;
    }, [toasts]);

    const toastPositionContainers = makePositionContainers([...toasts]);

    return {
        toastPositionContainers,
        deleteToast,
    };
};

export default useContainer;
