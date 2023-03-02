import { useState, useEffect } from 'react';

const useToast = ({ duration, deleteToast, animationDuration, id }) => {
    const [isClosing, setIsClosing] = useState(false);

    const animatedToastDelete = () => {
        setIsClosing(true);
        setTimeout(() => {
            deleteToast(id);
        }, animationDuration);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            animatedToastDelete(id);
        }, duration);
        return () => {
            clearTimeout(timer);
        };
    }, [id]);

    return {
        isClosing,
        animatedToastDelete,
    };
};

export default useToast;
