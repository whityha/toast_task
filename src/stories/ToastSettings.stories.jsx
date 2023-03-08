import React from 'react';

import ContainerToast from '../components/Container';
import toast from '../utils/controller';

export default {
    title: 'Settings/Toast',
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
            options: ['bubble', 'opacity', 'slide'],
        },
        translate: {
            control: { type: 'object' },
        },
        backgroundColor: {
            control: { type: 'color' },
        },
    },
};

const Template = ({
    type,
    backgroundColor,
    animation,
    title,
    description,
    duration,
    translate,
    position,
}) => {
    const showToast = () => {
        toast.addToast({
            position,
            title,
            description,
            type,
            duration,
            animation,
            translate,
            backgroundColor,
        });
    };
    return (
        <>
            <button
                type="button"
                id="button"
                style={{ position: 'absolute', top: '50%', left: '50%' }}
                onClick={showToast}
            >
                CLICK
            </button>
            <ContainerToast />
        </>
    );
};

export const TOAST = Template.bind({});

TOAST.args = {
    type: 'default',
};
