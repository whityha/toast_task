/* eslint-disable react/jsx-props-no-spreading */
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
        transform: {
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
    transform,
    position,
}) => (
    <>
        <button
            type="button"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
            onClick={() => {
                toast.addToast({
                    position,
                    title,
                    description,
                    type,
                    duration,
                    animation,
                    transform,
                });
            }}
        >
            CLICK
        </button>
        <ContainerToast />
    </>
);

export const EXAMPLE_DEFAULT = Template.bind({});

EXAMPLE_DEFAULT.args = {
    type: 'default',
};

export const EXAMPLE_ERROR = Template.bind({});

EXAMPLE_ERROR.args = {
    type: 'error',
};
