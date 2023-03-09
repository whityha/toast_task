import { useEffect, useState } from 'react';

import Theme from '../theme/theme';
import toastServices from '../utils/ServiсeSingleton';

const useToast = ({ duration, animationDuration, id }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isForceClosing, setIsForceClosing] = useState(false);

    const closeToast = (setClosingState) => {
        setClosingState(true);
        setTimeout(() => {
            toastServices.deleteToast(id);
        }, animationDuration);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            closeToast(setIsClosing);
        }, duration + Theme.animationDuration);
        return () => {
            toastServices.deleteToast(id);
            clearTimeout(timer);
        };
    }, [id]);

    return {
        isClosing,
        isForceClosing,
        closeToast,
        setIsForceClosing,
    };
};

export default useToast;
