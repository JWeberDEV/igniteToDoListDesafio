# ✅ Task Manager - React + TypeScript

![React](https://img.shields.io/badge/React-18.0.0-blue)  
![TypeScript](https://img.shields.io/badge/TypeScript-4.0-blue)  
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)  
[![Deploy no Vercel](https://vercelbadge.vercel.app/api/seu-usuario/nome-do-repositorio)](https://nome-do-projeto.vercel.app)

Um **gerenciador de tarefas simples e funcional** desenvolvido com **React + TypeScript**, focado em boas práticas, componentes reutilizáveis e código limpo.  

---

## 📌 **Funcionalidades**
✔ Adicionar novas tarefas  
✔ Marcar tarefas como concluídas  
✔ Alternar status entre concluída e não concluída  
✔ Excluir tarefas individualmente  
✔ Contador de tarefas criadas e concluídas  
✔ Feedback visual quando não há tarefas cadastradas  

---

## 🖼 **Demonstração da Interface**
> (Adicione um print do projeto aqui)
![Exemplo da interface](./assets/preview.png)

---

## 🛠 **Tecnologias Utilizadas**
- **React** (biblioteca principal)
- **TypeScript** (tipagem estática)
- **CSS Modules** (estilização modular)
- **React Icons** (ícones)
- **Vite** (ferramenta de build)

---

## 📂 **Estrutura do Projeto**

src/
│
├── assets/ # Imagens e ícones estáticos
│ └── img/logo.png # Logo da aplicação
│
├── components/ # Componentes reutilizáveis
│ ├── header/
│ │ ├── Header.tsx # Cabeçalho com logo
│ │ └── Header.module.css
│ ├── input/
│ │ ├── Input.tsx # Campo de texto para adicionar tarefas
│ │ └── Input.module.css
│ ├── button/
│ │ ├── Button.tsx # Botão de criar tarefa
│ │ └── Button.module.css
│ └── tasks/
│ ├── Tasks.tsx # Lista de tarefas e lógica de status
│ └── Tasks.module.css
│
├── css/
│ └── global.css # Estilos globais
│
├── App.tsx # Componente principal
└── main.tsx # Ponto de entrada da aplicação

---

## ▶ **Como Rodar o Projeto**

### **Pré-requisitos**
- [Node.js](https://nodejs.org) instalado
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
yarn install

#Rodando em modo desenvolvimento
yarn dev

✅ Componentes do Projeto
🔹 Header

Exibe o logotipo da aplicação no topo.

🔹 Input

Componente de input controlado para digitar novas tarefas.

🔹 Button

Botão estilizado com ícone para adicionar tarefas.

🔹 Tasks

Renderiza a lista de tarefas com ícones para concluir/excluir.

🚀 Melhorias Futuras

 Persistência de tarefas no LocalStorage

 Filtro para exibir todas, concluídas ou pendentes

 Tema Dark Mode

 Testes unitários com Jest + React Testing Library

 Deploy no Vercel ou Netlify

🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature:

git checkout -b minha-feature

3. Commit suas alterações:
git commit -m 'Adicionei nova funcionalidade'

4. Envie para o repositório remoto:
git push origin minha-feature

5. Abra um Pull Request

📜 Licença
Este projeto está sob a licença MIT.

🔗 Conecte-se comigo

GitHub: https://github.com/JWeberDEV
LinkedIn: https://www.linkedin.com/in/josias-weber-65a7b2171/