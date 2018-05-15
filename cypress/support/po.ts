///<reference path="../../node_modules/cypress/types/index.d.ts"/>

// cypress/support/po.ts
// we could place this url into cypress.json as "baseUrl"
const url = 'http://localhost:4200';

export const navigateTo = () => cy.visit(url);

export const getGreeting = () => cy.get('hg-root h1');
