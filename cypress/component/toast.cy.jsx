/* eslint-disable no-undef */
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import chaiColors from 'chai-colors';
import React from 'react';

import * as stories from '../../src/stories/App.stories';
import Theme from '../../src/theme/index';

chai.use(chaiColors);

// compile the "Simple" story with the library
const { TOAST_DEFAULT, TOAST_ERROR } = composeStories(stories);

describe('TOAST_DEFAULT', () => {
    it('should render default type toast', () => {
        mount(<TOAST_DEFAULT />);
        cy.get('#button').click();
        cy.wait(1000).get('#button').click();
        cy.get('#button').click();
        cy.get('#button').click({ force: true });
        cy.get(`[data-test=toast]`).should('have.length', 3);
        cy.get(`[data-test=toast]`)
            .first()
            .should('have.css', 'background-color')
            .and('be.colored', Theme.default.backgroundColor);
    });
});

describe('TOAST_ERROR', () => {
    it('should render error type toast', () => {
        mount(<TOAST_ERROR />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.error.backgroundColor);
    });
});
