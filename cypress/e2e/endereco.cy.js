/// <reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page";
const { gerarEnderecoFake } = require('../support/fakeData');

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {

        const dados = gerarEnderecoFake();
        EnderecoPage.editarEnderecoFaturamento(
            dados.nome,
            dados.sobrenome,
            dados.empresa,
            dados.pais,
            dados.endereco,
            dados.numero,
            dados.cidade,
            dados.estado,
            dados.cep,
            dados.telefone,
            dados.email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});