import React from 'react';

import ContainerToast from '../components/Container';
import toast from '../utils/controller';

export default {
    title: 'Example/App',
    component: ContainerToast,
    argTypes: {
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        type: {
            control: { type: 'radio' },
            options: ['error', 'warning', 'info', 'success'],
        },
        duration: {
            control: { type: 'number' },
        },
        position: {
            control: { type: 'radio' },
            options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        },
        animation: {
            control: { type: 'radio' },
            options: ['bubble', 'opacity'],
        },
        translate: {
            control: { type: 'object' },
        },
    },
};

const Template = ({
    type,
    animation,
    title,
    description,
    duration,
    translate,
    position,
}) => (
    <>
        <button
            type="button"
            id="button"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
            onClick={() => {
                toast.addToast({
                    position,
                    title,
                    description,
                    type,
                    duration,
                    animation,
                    translate,
                });
            }}
        >
            CLICK
        </button>
        <ContainerToast />
    </>
);

export const TOAST_DEFAULT = Template.bind({});

TOAST_DEFAULT.args = {
    type: 'default',
    duration: 4000,
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
