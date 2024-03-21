import productMgmLocators from "../locators/productMgmLocators";
import { PRODUCT_CARD_IMAGE_URL } from '../../support/constants';

class ProductMgmPage {
    constructor() {
        this.productId = null;
    }
    addProductBtn() {
        cy.get(productMgmLocators.ADD_PRODUCT).click()
    }
    productNameTexbox() {
        cy.get(productMgmLocators.PRODUCT_NAME_TXTBOX).type('REMERA VANS NEGRA HOMBRE')
    }
    productPriceTexbox() {
        cy.get(productMgmLocators.PRICE_TXTBOX).type('26000');
    }
    productImageUrl() {
        return cy.get(productMgmLocators.PROD_IMAGE_URL_TXTBOX).type(PRODUCT_CARD_IMAGE_URL.VANS_NEGRA_HMC);
    }
    productIdTexbox() {
        this.productId = Math.floor(Math.random() * 9000) + 1000;
        cy.get(productMgmLocators.ID_TXTBOX).type(this.productId);
    }
    createProductBtn() {
        cy.get(productMgmLocators.CREATE_PROD_BTN).click();
    }
    findProductById(){
        cy.get(productMgmLocators.SEARCH_TYPE).select('id');
        cy.get(productMgmLocators.SEARCH_PRODUCT).type(`${this.productId}{enter}`);
    }
    deleteProduct(){
        cy.get(`[data-cy="delete-${this.productId}"]`).click();
        cy.get(productMgmLocators.COFIRM_DELETE_PRODUCT).click();
    }
    findProductDeleted(){
        cy.get(productMgmLocators.SEARCH_TYPE).select('id');
        cy.get(productMgmLocators.SEARCH_PRODUCT).type(`${this.productId}{enter}`);
    }
    verifyDeleteProduct(){
        cy.get(`[data-cy="delete-${this.productId}"]`).should('not.exist');
    }
    cancelAdDProductBtn() {
        cy.get(productMgmLocators.CANCEL_ADD_PROD_BTN).click();
    }

};
export default ProductMgmPage;