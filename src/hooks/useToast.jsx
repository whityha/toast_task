import { useEffect, useState } from 'react';

import Theme from '../theme/theme';
import toast from '../utils/controller';

const useToast = ({ duration, animationDuration, id }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isForceClosing, setIsForceClosing] = useState(false);

    const closeToast = () => {
        setIsClosing(true);
        setTimeout(() => {
            toast.deleteToast(id);
        }, animationDuration);
    };

    const forceCloseToast = () => {
        setIsForceClosing(true);
        setTimeout(() => {
            toast.deleteToast(id);
        }, animationDuration);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            closeToast(id);
        }, duration + Theme.animationDuration);
        return () => {
            if (toast.containerToast) toast.deleteToast(id);
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
