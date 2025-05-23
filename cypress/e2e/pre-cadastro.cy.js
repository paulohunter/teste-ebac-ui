/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré cadastro', () => {
    const emailFaker = faker.internet.email();
    const nomeFaker = faker.person.firstName();
    const sobrenomeFaker = faker.person.lastName();

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve completar pré cadastro com sucesso usando Comandos customizados', () => {
        const emailFaker2 = faker.internet.email()
        const nomeFaker2 = faker.person.firstName()
        const sobrenomeFaker2 = faker.person.lastName()
        cy.preCadastro(emailFaker2, '!teste@teste$', nomeFaker2, sobrenomeFaker2)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});
