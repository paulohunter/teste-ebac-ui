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

---

## 📁 Clonando o projeto

```bash
git clone https://github.com/seu-usuario/teste-ebac-ui.git
cd teste-ebac-ui

---

## 📦 Instalando dependências do projeto

```bash
npm install

---

## 🚀 Rodando os testes
## 🔍 Modo interativo (com interface)

```bash
npx cypress open

##⚙️ Modo headless (linha de comando)

```bash
npx cypress run