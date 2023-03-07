import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import chaiColors from 'chai-colors';
import React from 'react';

import * as stories from '../../src/stories/ToastSettings.stories';
import Theme from '../../src/theme/theme';
import toast from '../../src/utils/controller';

chai.use(chaiColors);

const { TOAST } = composeStories(stories);

describe('TOAST_DEFAULT', () => {
    it('should render default type toast', () => {
        mount(<TOAST type={toast.TYPE.DEFAULT} />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .first()
            .should('have.css', 'background-color')
            .and('be.colored', Theme.default.backgroundColor);
    });
});

describe('TOAST_ERROR', () => {
    it('should render error type toast', () => {
        mount(<TOAST type={toast.TYPE.ERROR} />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.error.backgroundColor);
    });
});

describe('TOAST_WARNING', () => {
    it('should render warning type toast', () => {
        mount(<TOAST type={toast.TYPE.WARNING} />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.warning.backgroundColor);
    });
});

describe('TOAST_INFO', () => {
    it('should render info type toast', () => {
        mount(<TOAST type={toast.TYPE.INFO} />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.info.backgroundColor);
    });
});

describe('TOAST_SUCCESS', () => {
    it('should render success type toast', () => {
        mount(<TOAST type={toast.TYPE.SUCCESS} />);
        cy.get('#button').click();
        cy.get(`[data-test=toast]`)
            .should('have.css', 'background-color')
            .and('be.colored', Theme.success.backgroundColor);
    });
});
