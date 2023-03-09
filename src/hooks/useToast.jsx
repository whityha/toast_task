import { useEffect, useState } from 'react';

import Theme from '../theme/theme';
import toastService from '../utils/controller';

const useToast = ({ duration, animationDuration, id }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isForceClosing, setIsForceClosing] = useState(false);

    const closeToast = (setClosingState) => {
        setClosingState(true);
        setTimeout(() => {
            toastService.deleteToast(id);
        }, animationDuration);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            closeToast(setIsClosing);
        }, duration + Theme.animationDuration);
        return () => {
            toastService.deleteToast(id);
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
