import React from 'react';

import Toast from '../components/Toast';
import defaultParameters from '../constants/defaultParameters';
import normalizeParams from '../utils/normalizeParams';

export default {
    title: 'TOASTS/ToastExamples',
    component: Toast,
};

const Template = ({ type }) => {
    const parameters = normalizeParams({ ...defaultParameters, type });
    return <Toast {...parameters} duration={1000000} type={type} />;
};
export const TOAST_DEFAULT = Template.bind({});

TOAST_DEFAULT.args = {
    type: 'default',
};

export const TOAST_ERROR = Template.bind({});

TOAST_ERROR.args = {
    type: 'error',
};

export const TOAST_WARNING = Template.bind({});

TOAST_WARNING.args = {
    type: 'warning',
};

export const TOAST_INFO = Template.bind({});

TOAST_INFO.args = {
    type: 'info',
};

export const TOAST_SUCCESS = Template.bind({});

TOAST_SUCCESS.args = {
    type: 'success',
};
