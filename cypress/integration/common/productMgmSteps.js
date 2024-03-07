/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';
import ProductMgmPage from '../pages/productMgmPage';
import {PRODUCT_CARD_IMAGE_URL} from '../support/constants';
const loginPage = new LoginPage();
const productMgmPage = new ProductMgmPage();


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
    productMgmPage.addProductBtn();
    productMgmPage.productNameTexbox();
    productMgmPage.productPriceTexbox();
    productMgmPage.productImageUrl().type(PRODUCT_CARD_IMAGE_URL.VANS_NEGRA_HMC);
    productMgmPage.productIdTexbox();
    productMgmPage.createProductBtn();
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