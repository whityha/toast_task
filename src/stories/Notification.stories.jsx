/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Notification from '../components/Notification';

export default {
    title: 'Example/Notification',
    component: Notification,
    argTypes: {
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
    },
};

const Template = (args) => <Notification {...args} />;

export const EXAMPLE = Template.bind({});

export const EXAMPLE_ERROR = Template.bind({});

EXAMPLE_ERROR.args = {
    type: 'error',
};

export const EXAMPLE_SUCCESS = Template.bind({});

EXAMPLE_SUCCESS.args = {
    type: 'success',
};
export const EXAMPLE_INFO = Template.bind({});

EXAMPLE_INFO.args = {
    type: 'info',
};
