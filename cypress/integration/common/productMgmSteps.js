/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';
import ProductMgmPage from '../pages/productMgmPage';
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
    productMgmPage.productImageUrl();
    productMgmPage.productIdTexbox();
    productMgmPage.createProductBtn();
    cy.closeModal();
    cy.wait(5000);
});

When('busca el producto creado recientemente', () => {
    productMgmPage.findProductById();
});

And('elimina el producto recien creado', () => {
    productMgmPage.deleteProduct();
    cy.closeModal();
});

And('vuelve a buscar el producto eliminado', () => {
    productMgmPage.findProductDeleted();
});

Then('verifica que el producto fue eliminado exitosamente', () => {
    productMgmPage.verifyDeleteProduct();
});