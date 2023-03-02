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
            options: ['error', 'default', 'info', 'success'],
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
    },
};

const Template = ({
    position,
    type,
    animation,
    title,
    description,
    duration,
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
                    translate: {
                        translateX: '100px',
                        translateY: '0px',
                    },
                });
                toast.addToast({
                    position,
                    title,
                    description,
                    type,
                    duration,
                    animation,
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
    duration: 2000,
};

export const EXAMPLE_ERROR = Template.bind({});

EXAMPLE_ERROR.args = {
    type: 'error',
};
