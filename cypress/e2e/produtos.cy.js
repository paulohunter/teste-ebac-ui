/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos/')
    });

    it('Deve selecionar um produto da loja', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Brown').click()

        cy.get('.input-text').clear().type(quantidade)

        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Brown', 3)
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 5)
    });

});