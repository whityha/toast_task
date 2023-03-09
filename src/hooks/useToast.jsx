import { useEffect, useState } from 'react';

import Theme from '../theme/theme';
import toastService from '../utils/controller';

const useToast = ({ duration, animationDuration, id }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isForceClosing, setIsForceClosing] = useState(false);

    const closeToast = () => {
        setIsClosing(true);
        setTimeout(() => {
            toastService.deleteToast(id);
        }, animationDuration);
    };

    const forceCloseToast = () => {
        setIsForceClosing(true);
        setTimeout(() => {
            toastService.deleteToast(id);
        }, animationDuration);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            closeToast(id);
        }, duration + Theme.animationDuration);
        return () => {
            toastService.deleteToast(id);
            clearTimeout(timer);
        };
    }, [id]);

    return {
        isClosing,
        isForceClosing,
        forceCloseToast,
    };
};

export default useToast;
