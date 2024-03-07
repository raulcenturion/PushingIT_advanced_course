import productMgmLocators from "../locators/productMgmLocators";

class ProductMgmPage{
addProductBtn(){
    cy.get(productMgmLocators.ADD_PRODUCT).click()
}
productNameTexbox(){
    cy.get(productMgmLocators.PRODUCT_NAME_TXTBOX).type('REMERA VANS NEGRA HOMBRE')
}
productPriceTexbox(){
    cy.get(productMgmLocators.PRICE_TXTBOX).type('26000');
}
productImageUrl(){
    cy.get(productMgmLocators.PROD_IMAGE_URL_TXTBOX)
}
productIdTexbox(){
    const randomId = Math.floor(Math.random() * 9000) + 1000;
    cy.get(productMgmLocators.ID_TXTBOX).type(randomId);
}
createProductBtn(){
    cy.get(productMgmLocators.CREATE_PROD_BTN).click();
}
cancelAdDProductBtn(){
    cy.get(productMgmLocators.CANCEL_ADD_PROD_BTN).click();
}

};
export default ProductMgmPage;