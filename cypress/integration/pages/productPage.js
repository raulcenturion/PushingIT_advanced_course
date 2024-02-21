describe('Pruebas de la página de productos', () => {
    
    beforeEach(() => {
        cy.productPageSelectors();
    });

    it('Muestra el popUp de agregar producto', () => {
        cy.get('@addProduct').should('be.visible');
        cy.get('@addProduct').click();
        cy.get('@cancelAddProduct').click();
        
    });

    it('Debe dirigirse al goShoppingCart', () => {
        cy.get('@goShoppingCart').click();
        
    });

    
});
