import { useEffect, useState } from 'react';

import Theme from '../theme/theme';
import toast from '../utils/controller';

const useToast = ({ duration, animationDuration, id }) => {
    const [isClosing, setIsClosing] = useState(false);

    const deleteToastWithAnimate = () => {
        setIsClosing(true);
        setTimeout(() => {
            toast.deleteToast(id);
        }, animationDuration);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            deleteToastWithAnimate(id);
        }, duration + Theme.animationDuration);
        return () => {
            toast.deleteToast(id);
            clearTimeout(timer);
        };
    }, [id]);

    return {
        isClosing,
        deleteToastWithAnimate,
    };
};

export default useToast;
