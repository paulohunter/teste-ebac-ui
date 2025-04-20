/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré cadastro', () => {
    const emailFaker = faker.internet.email();
    const nomeFaker = faker.person.firstName();
    const sobrenomeFaker = faker.person.lastName();

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(emailFaker); // Linha 10
        cy.get('#reg_password').type('!teste@teste$');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nomeFaker); // Linha 14
        cy.get('#account_last_name').type(sobrenomeFaker); // Linha 15
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });
});
