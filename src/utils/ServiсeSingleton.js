import uuid from 'uuid4';

import defaultParameters from '../constants/defaultParameters';
import Theme from '../theme/theme';

import normalizeParams from './normalizeParams';

class ServiсeSingleton {
    static getInstance() {
        if (!ServiсeSingleton.instance)
            ServiсeSingleton.instance = new ServiсeSingleton();
        return ServiсeSingleton.instance;
    }

    toasts = [];

    addToast(customParams = defaultParameters) {
        const toastParameters = normalizeParams({
            ...defaultParameters,
            ...customParams,
        });
        if (this.toasts.length < 3) {
            this.toasts.push({ ...toastParameters, id: uuid() });
            this.setToasts(this.toasts);
        }
    }

    deleteToast(id) {
        this.toasts = [...this.toasts].filter((toast) => toast.id !== id);
        this.setToasts(this.toasts);
    }

    setToasts(toasts) {
        this.toastContainer.setToastsList(toasts);
    }

    setSettingsToType = (type, customParams) => {
        Theme[type] = { ...Theme[type], ...customParams };
        return { ...Theme[type] };
    };

    resetSettings = (type) => {
        Theme.resetSettings(type);
    };
}

const toastService = ServiсeSingleton.getInstance();

export default toastService;
