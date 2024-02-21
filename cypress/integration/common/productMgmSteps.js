/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';
const loginPage = new LoginPage();


Given('el usuario se encuentra en la pagina de pushingIt', () => {
    cy.visit("/");
});

And('el usuario esta logueado', () => {
    loginPage.login('(pushingit','123456!');
});

And('se dirige a Online shop', () => {
    cy.OnlineShop();
});

And('agrega un producto nuevo', () => {
    cy.productPageSelectors();
    cy.get('@addProduct').click();
    cy.get('@productName').type('REMERA VANS NEGRA HOMBRE');
    cy.get('@productPrice').type('26000');
    cy.get('@productCard').type(productCardImageURL);
    cy.get('@productID').type('950');
    cy.get('@createProduct').click();
    cy.get('@closeModal').click();
});

When('busca el producto creado recientemente', () => {
    cy.findProductByName();
});

And('elimina el producto recien creado', () => {
    cy.deleteProduc();
});

And('vuelve a buscar el producto eliminado', () => {
    cy.findProductByName();
});

Then('verifica que el producto fue eliminado exitosamente', () => {
    cy.get('[data-cy="delete-950"]').should('not.exist');
});