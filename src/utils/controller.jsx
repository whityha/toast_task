/* eslint-disable class-methods-use-this */
import normalizeParams from './normalizeParams';
import filterParams from './filter';
import Theme from '../theme';

class ToastController {
    static defaultParams = {
        type: 'success',
        title: 'Default title',
        description: 'Default description',
        position: 'bottom-right',
        duration: 2000,
        animation: 'opacity',
    };

    static getInstance() {
        if (!ToastController.instance)
            ToastController.instance = new ToastController();
        return ToastController.instance;
    }

    TYPE = {
        ERROR: 'error',
        SUCCESS: 'success',
        INFO: 'info',
    };

    POSITION = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
    };

    ANIMATION = {
        OPACITY: 'opacity',
        BUBBLE: 'bubble',
    };

    addToast(customParams = ToastController.defaultParams) {
        const f = filterParams(customParams);
        const toastParameters = normalizeParams({
            ...ToastController.defaultParams,
            ...f,
        });
        this.toastContainer.addToastInList(toastParameters);
    }

    getSettingsByType = (type) => ({ ...Theme[type] });

    setSettingsToType = (type, customParams) => {
        const params = filterParams(customParams);
        Theme[type] = { ...Theme[type], ...params };
        return { ...Theme[type] };
    };
}

export default ToastController.getInstance();
