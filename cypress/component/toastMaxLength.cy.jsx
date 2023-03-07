import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import chaiColors from 'chai-colors';
import React from 'react';

import * as stories from '../../src/stories/App.stories';

chai.use(chaiColors);

const { TOAST_DEFAULT } = composeStories(stories);

describe('MAX_TOAST_TOGETHER', () => {
    it('should render only 3 toasts', () => {
        mount(<TOAST_DEFAULT />);
        cy.get('#button').click();
        cy.wait(1000).get('#button').click();
        cy.get('#button').click();
        cy.get('#button').click({ force: true });
        cy.get(`[data-test=toast]`).should('have.length', 3);
    });
});
