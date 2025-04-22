const { faker } = require('@faker-js/faker');

function gerarEnderecoFake() {
    return {
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        empresa: faker.company.name(),
        pais: 'Brasil', // pode deixar fixo se for necessário
        endereco: faker.location.streetAddress(),
        numero: faker.location.buildingNumber(),
        cidade: faker.location.city(),
        estado: 'São Paulo', // também pode fixar ou mapear por UF
        cep: faker.location.zipCode('########'),
        telefone: `85${faker.number.int({ min: 900000000, max: 999999999 })}`,
        email: faker.internet.email()
    };
}

module.exports = { gerarEnderecoFake };