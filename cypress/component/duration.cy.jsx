import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import chaiColors from 'chai-colors';
import React from 'react';

import * as stories from '../../src/stories/App.stories';
import Theme from '../../src/theme/index';

chai.use(chaiColors);

const { TOAST_DEFAULT } = composeStories(stories);

describe('DURATION', () => {
    it('should close after delay', () => {
        const duration = 5000;
        mount(<TOAST_DEFAULT duration={duration} />);
        cy.get('#button').click();
        cy.wait(duration + 2 * Theme.animationDuration)
            .get(`[data-test=toast]`, { timeout: 0 })
            .should('not.exist');
    });
});

describe('DURATION', () => {
    it('should be opened before delay', () => {
        const duration = 3000;
        mount(<TOAST_DEFAULT duration={duration} />);
        cy.get('#button').click();
        cy.wait(duration + 2 * Theme.animationDuration - 100)
            .get(`[data-test=toast]`, { timeout: 0 })
            .should('exist');
    });
});
