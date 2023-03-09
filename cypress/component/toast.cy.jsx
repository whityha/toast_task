import React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import chaiColors from 'chai-colors';

import * as stories from '@/stories/ToastSettings.stories';
import Theme from '@/theme/theme';

chai.use(chaiColors);

const { TOAST } = composeStories(stories);

describe('TOAST_DEFAULT', () => {
    it('should render default type toast', () => {
        mount(<TOAST type="default" />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .first()
            .should('have.css', 'background-color')
            .and('be.colored', Theme.default.backgroundColor);
    });
});

describe('TOAST_ERROR', () => {
    it('should render error type toast', () => {
        mount(<TOAST type="error" />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.error.backgroundColor);
    });
});

describe('TOAST_WARNING', () => {
    it('should render warning type toast', () => {
        mount(<TOAST type="warning" />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.warning.backgroundColor);
    });
});

describe('TOAST_INFO', () => {
    it('should render info type toast', () => {
        mount(<TOAST type="info" />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.info.backgroundColor);
    });
});

describe('TOAST_SUCCESS', () => {
    it('should render success type toast', () => {
        mount(<TOAST type="success" />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.success.backgroundColor);
    });
});
