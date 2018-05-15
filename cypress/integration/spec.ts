// cypress/integration/spec.ts
import { navigateTo, getGreeting } from '../support/po';

describe('Hello Angular', () => {
  beforeEach(navigateTo);

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to hg!');
  });

  it('has 3 links', () => {
    cy.get('hg-root li a').should('have.length', 3);
  });
});
