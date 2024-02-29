/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';
//import {productCardImageURL} from '../support/constants';
const loginPage = new LoginPage();


Given('el usuario se encuentra en la pagina de pushingIt', () => {
    cy.visit("/");
});

And('el usuario esta logueado', () => {
    loginPage.login('pushingit','123456!');
});

And('se dirige a Online shop', () => {
    cy.OnlineShop().click();
    
});

And('agrega un producto nuevo', () => {
    const VANS_NEGRA_HMC = 'https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/10/5/8908435.jpg';
    cy.productPageSelectors();
    cy.get('@addProduct');
    cy.get('@productName');
    cy.get('@productPrice');
    //cy.get('@productCard').type(VANS_NEGRA_HMC);
    cy.get('@productID');
    cy.get('@createProduct');
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