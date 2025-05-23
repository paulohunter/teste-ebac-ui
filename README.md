# 🧪 Testes Automatizados - EBAC UI

Este repositório contém os testes automatizados da interface da loja EBAC, utilizando [Cypress](https://www.cypress.io/).

🔗 **URL do sistema a ser testado:**  
http://lojaebac.ebaconline.art.br/

---

## 📚 Sumário

- [📦 Pré-requisitos](#pré-requisitos)
- [⚙️ Instalando o Node.js no Ubuntu](#instalando-o-nodejs-no-ubuntu)
- [📁 Clonando o projeto](#clonando-o-projeto)
- [📦 Instalando dependências do projeto](#instalando-dependências-do-projeto)
- [🚀 Rodando os testes](#rodando-os-testes)
- [✅ Estrutura dos testes](#estrutura-dos-testes)
- [🛠 Ferramentas utilizadas](#ferramentas-utilizadas)
- [🎲 Instalando a biblioteca Faker](#🎲-instalando-a-biblioteca-faker)
- [📄 Licença](#licença)

---

## 📦 Pré-requisitos

- Ubuntu 18.04 ou superior
- Acesso de administrador (sudo)
- Git instalado

---

## ⚙️ Instalando o Node.js no Ubuntu

Execute os comandos abaixo para instalar o Node.js e o npm:

```bash
# Atualize o índice de pacotes
sudo apt update

# Instale o curl, caso ainda não esteja instalado
sudo apt install curl -y

# Baixe o script de instalação da versão 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Instale o Node.js e o npm
sudo apt install -y nodejs

# Verifique a instalação
node -v
npm -v
```

---

## 📁 Clonando o projeto

```bash
git clone https://github.com/seu-usuario/teste-ebac-ui.git
cd teste-ebac-ui
```

---

## 📦 Instalando dependências do projeto

```bash
npm install
```

---

## 🚀 Rodando os testes

### 🔍 Modo interativo (com interface)

```bash
npx cypress open
```

### ⚙️ Modo headless (linha de comando)

```bash
npx cypress run
```

---

## ✅ Estrutura dos testes

Os testes estão localizados na pasta `cypress/e2e` e validam:

- Login bem-sucedido
- Login com erro
- Elementos visíveis após login (ex: link de pedidos)

### Exemplo de validação de login com sucesso:

```js
cy.get('.woocommerce-MyAccount-navigation-link--orders > a')
  .should('be.visible')
```

---

## 🛠 Ferramentas utilizadas

- Node.js
- Cypress
- JavaScript
- Visual Studio Code (VS Code)

---

## 📄 Licença

Este projeto está sob a licença MIT.
---

## 🎲 Instalando a biblioteca Faker

A biblioteca [`@faker-js/faker`](https://www.npmjs.com/package/@faker-js/faker) é usada para gerar dados aleatórios, como nomes, e-mails e endereços, útil para testes automatizados.

### Instalação

```bash
npm install @faker-js/faker
```

### Exemplo de uso

```js
import { faker } from '@faker-js/faker';

const nome = faker.person.firstName();
const sobrenome = faker.person.lastName();
const email = faker.internet.email(nome, sobrenome);

console.log(`Nome: ${nome} ${sobrenome}`);
console.log(`Email: ${email}`);
```
