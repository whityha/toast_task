import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import chaiColors from 'chai-colors';
import React from 'react';

import * as stories from '../../src/stories/ToastSettings.stories';
import Theme from '../../src/theme/theme';
import toast from '../../src/utils/controller';

chai.use(chaiColors);

const { TOAST } = composeStories(stories);

describe('SET_THEME', () => {
    it('should have background from user settings', () => {
        toast.setSettingsToType(toast.TYPE.DEFAULT, {
            backgroundColor: 'green',
        });
        mount(<TOAST />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', 'green');
    });

    it('should reset settings', () => {
        toast.resetSettings();
        mount(<TOAST />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.default.backgroundColor);
    });
});
