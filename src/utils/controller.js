import { ANIMATION, POSITION, TYPE } from '../constants';
import Theme from '../theme/theme';
import normalizeParams from './normalizeParams';
import validateParams from './validateFilter';

class ToastSingleton {
    static defaultParams = {
        type: TYPE.SUCCESS,
        title: 'Default title',
        description: 'Default description',
        position: POSITION.BOTTOM_RIGHT,
        duration: 1000,
        animationDuration: 500,
        animation: ANIMATION.BUBBLE,
    };

    static getInstance() {
        if (!ToastSingleton.instance)
            ToastSingleton.instance = new ToastSingleton();
        return ToastSingleton.instance;
    }

    TYPE = TYPE;

    POSITION = POSITION;

    ANIMATION = ANIMATION;

    addToast(customParams = ToastSingleton.defaultParams) {
        const validParams = validateParams(customParams);
        const toastParameters = normalizeParams({
            ...ToastSingleton.defaultParams,
            ...validParams,
        });
        this.toastContainer.addToastInList(toastParameters);
    }

    setSettingsToType = (type, customParams) => {
        const params = validateParams(customParams);
        Theme[type] = { ...Theme[type], ...params };
        return { ...Theme[type] };
    };

    resetSettings = (type) => {
        Theme.resetSettings(type);
    };
}

const toastInstance = ToastSingleton.getInstance();
export default toastInstance;
