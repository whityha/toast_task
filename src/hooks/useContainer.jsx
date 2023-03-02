import { useState, useRef, useEffect, useImperativeHandle } from 'react';
import toastInstance from '../utils/controller';
import { MAX_TOAST_TOGETHER } from '../constants';
import makePositionContainers from '../utils/makePositionContainers';

const useContainer = () => {
    const [toastList, setToastList] = useState([]);
    const ref = useRef(null);

    useImperativeHandle(ref, () => ({
        getToastList: () => toastList,
        addToastInList: (toastParams) =>
            setToastList((toasts) => {
                const toastLength = toasts.filter(Boolean).length;
                return toastLength < MAX_TOAST_TOGETHER
                    ? [
                          ...toasts,
                          {
                              ...toastParams,
                              id: toasts.length + 1,
                          },
                      ]
                    : toasts;
            }),
    }));

    const deleteToast = (id) => {
        setToastList((toasts) => {
            const a = [...toasts];
            delete a[id - 1];
            return [...a];
        });
    };

    useEffect(() => {
        toastInstance.toastContainer = ref.current;
    }, [toastList]);

    const toastPositionContainers = makePositionContainers([...toastList]);

    return {
        toastPositionContainers,
        toastList,
        ref,
        setToastList,
        deleteToast,
    };
};

export default useContainer;
