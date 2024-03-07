// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('findByDataCy', (dataCyValue) => {
    return cy.get(`[data-cy="${dataCyValue}"]`);
});
Cypress.Commands.add('closeModal', () => {
    cy.get('[data-cy="closeModal"]').click();

});
Cypress.Commands.add('OnlineShop', () => {
    cy.get('[data-cy="onlineshoplink"]');
});
Cypress.Commands.add('findProductByName', () => {
    cy.get('[data-cy="search-bar"]').type('REMERA VANS NEGRA HOMBRE', { enter });
});

Cypress.Commands.add('deleteProduc', () => {
    cy.get('[data-cy="delete-950"]').click();
});



Cypress.Commands.add('GoShoppingCart', () => {
    cy.get('[data-cy="goShoppingCart"]').as('goShoppingCart').click();
});

