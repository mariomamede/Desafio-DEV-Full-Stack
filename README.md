# 🚗 Vehicle Tracker

Um aplicativo de rastreamento de veículos em tempo real, desenvolvido com Next.js e integração com as APIs do Google Maps.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blue)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico para demonstrar minhas habilidades em desenvolvimento frontend com React, Next.js, TypeScript e outras tecnologias modernas.

O Vehicle Tracker permite visualizar e monitorar veículos em tempo real em um mapa interativo, com funcionalidades de pesquisa, filtragem e visualização detalhada de informações.

## ✨ Funcionalidades

- 🌓 **Tema Claro/Escuro**: Alternância entre os modos de visualização
- 🔍 **Pesquisa Avançada**: Busca por placa ou frota de veículos
- 🕒 **Informações em Tempo Real**: Dados de última atualização sempre visíveis
- 🚙 **Contador de Veículos**: Visualização do total de veículos no mapa
- 🎨 **Cores por Frota**: Identificação visual com cores diferentes para cada frota
- 📊 **Informações Detalhadas**: Dados completos ao clicar em um veículo
- 📱 **Layout Responsivo**: Adaptação para diferentes tamanhos de tela
- 📋 **Tabela Ordenável**: Ordenação de dados ao clicar nos cabeçalhos

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor
- **TypeScript**: Tipagem estática para maior segurança do código
- **React Query**: Gerenciamento eficiente de requisições e estado
- **Redux**: Gerenciamento global de componentes
- **TailwindCSS**: Estilização rápida e responsiva
- **Jest & React Testing Library**: Testes unitários e de integração
- **Google Maps API**: Integração para visualização de mapas
- **CI/CD**: Processo automatizado de integração e entrega contínua

## 🚀 Como Executar

Siga estas etapas para executar o projeto localmente:

1. Clone o repositório:
```bash
git clone https://github.com/mariomamede/Desafio-DEV-Full-Stack.git
cd Desafio-DEV-Full-Stack
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=""
NEXT_PUBLIC_BASE_URL=https://develop-back-rota.rota361.com.br
NEXT_PUBLIC_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MTVmOWE3LTk0ZmEtNDBmYy04Nzc3LWU3YTMxNzVjYmYwZCIsIm5hbWUiOiJJc2FiZWxsaSBOYXZhcnJvIiwiZG9jdW1lbnQiOiIzNTgwNzI0NTI1MyIsImVtYWlsIjoidGVzdGVAdHJhLmNvbSIsInBob25lIjoiMTE5Nzc4OTY1NDMiLCJzdGF0dXMiOiJhY3RpdmUiLCJpc01hc3RlciI6dHJ1ZSwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9jbmQtdHJ1Y2tlcnBheS5zZm8zLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vcm90b2dyYW1hLzZlOWFjYjIxMWI4NTFjYjBiMGZiZGNkMTVjZTFiODFjLndlYnAiLCJjb3Jwb3JhdGVJZCI6IjEzM2MzZWVlLTA2NDktNDY1Yi1hZWUyLWQ1N2FjZjViNWIyZiIsImNyZWF0ZWRBdCI6IjIwMjUtMDQtMTFUMTM6MDA6MjMuNjk3WiIsInBlcm1pc3Npb25zIjpbImRyaXZlci1saW5rLWRlbGV0ZSIsImRhc2hib2FyZCIsImRyaXZlciIsImRyaXZlci1yZWdpc3RyYXRpb25zLWludml0ZSIsImRyaXZlci11bmxpbmsiLCJkcml2ZXItbGluay1jcmVhdGUiLCJkcml2ZXItbGluay1lZGl0IiwidmVoaWNsZS1yZWdpc3RyYXRpb25zIiwidmVoaWNsZS1yZWdpc3RyYXRpb25zLXZpZXciLCJ2ZWhpY2xlLXJlZ2lzdHJhdGlvbnMtZWRpdCIsInZlaGljbGUtcmVnaXN0cmF0aW9ucy1yZWdpc3RlciIsInZlaGljbGUtcmVnaXN0cmF0aW9ucy1kZWxldGUiLCJwbGFjZXMiLCJwbGFjZXMtdmlldyIsInBsYWNlcy1lZGl0IiwicGxhY2VzLXJlZ2lzdGVyIiwicGxhY2VzLWRlbGV0ZSIsInJvdXRlcyIsInJvdXRlcy1yZWdpc3RlciIsInJvdXRlcy1kZWxldGUiLCJyb3V0ZXMtZWRpdCIsInJvdXRlcy12aWV3IiwidHJpcHMiLCJ0cmlwcy12aWV3IiwidHJpcHMtY2FuY2VsIiwidHJpcHMtZWRpdCIsInRyaXBzLWRlbGV0ZSIsInRyaXBzLWNoYXQiLCJyZXBvcnRzIiwicmVwb3J0cy12aWV3IiwicmVwb3J0cy1kb3dubG9hZCIsImFsZXJ0LWNvbmZpZ3VyYXRpb24iLCJhbGVydC1jb25maWd1cmF0aW9uLXZpZXciLCJvcGVyYXRvcnMiLCJvcGVyYXRvcnMtY3JlYXRlIiwib3BlcmF0b3JzLXZpZXciLCJhbGVydHMiLCJhbGVydHMtdmlldyIsIm9wZXJhdG9ycy1lZGl0Iiwib3BlcmF0b3JzLWRlbGV0ZSIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbnMtdmlldyIsInBlcm1pc3Npb25zLWVkaXQiLCJwZXJtaXNzaW9ucy1kZWxldGUiLCJwZXJtaXNzaW9ucy1jcmVhdGUiLCJpcy1jYXJyaWVyIiwidHJpcHMtY3JlYXRlIiwiY2hlY2tsaXN0IiwiY2hlY2tsaXN0LXZpZXciLCJjaGVja2xpc3QtdG8tY29tcGxldGUiXSwiaWF0IjoxNzQ2NTg0NTEyLCJleHAiOjE3NDc0NDg1MTJ9.qFYx9A8CDyvnYQlKItnaAsfulDhdE2aWeaTAoycS-yY
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📊 Estrutura do Projeto

```
src/
├── app/              # Rotas e páginas do Next.js
├── components/       # Componentes React reutilizáveis
│   ├── ui/           # Componentes de interface
│   ├── map/          # Componentes relacionados ao mapa
│   └── vehicle/      # Componentes relacionados aos veículos
├── hooks/            # Custom hooks
├── lib/              # Bibliotecas e utilitários
├── pages/            # Páginas do projeto
├── services/         # Serviços de API
├── store/            # Stories do Redux
├── styles/           # Estilos globais
└── types/            # Definições de tipos TypeScript
```

## 🧪 Testes

O projeto inclui testes end to end (E2E). Para executá-los:

```bash
npm run dev
npm run test:e2e
```

Para verificar a cobertura de testes:

```bash
npx playwright show-report
```

## 🌐 Deploy

O projeto está disponível online em:
[https://vehicle-tracker-demo.vercel.app](https://desafio-dev-full-stack.vercel.app/)

## 📝 Notas Adicionais

- Este projeto foi desenvolvido com foco em performance e usabilidade.
- A API utilizada é fornecida pela empresa como parte do teste técnico.
- O layout segue as especificações do protótipo Figma fornecido.

---

Desenvolvido por [Mario Mamede](https://github.com/mariomamede)
