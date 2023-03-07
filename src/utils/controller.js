import { ANIMATION, POSITION, TYPE } from '../constants';
import defaultParameters from '../constants/defaultParameters';
import Theme from '../theme/theme';
import normalizeParams from './normalizeParams';
import validateParams from './validateFilter';

class ToastSingleton {
    static getInstance() {
        if (!ToastSingleton.instance)
            ToastSingleton.instance = new ToastSingleton();
        return ToastSingleton.instance;
    }

    TYPE = TYPE;

    POSITION = POSITION;

    ANIMATION = ANIMATION;

    addToast(customParams = defaultParameters) {
        const validParams = validateParams(customParams);
        const toastParameters = normalizeParams({
            ...defaultParameters,
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
