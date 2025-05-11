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
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_do_google_maps
NEXT_PUBLIC_API_URL=url_da_api_fornecida
NEXT_PUBLIC_API_KEY=chave_da_api_fornecida
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

O projeto inclui testes unitários e de integração. Para executá-los:

```bash
npm run test
# ou
yarn test
```

Para verificar a cobertura de testes:

```bash
npm run test:coverage
# ou
yarn test:coverage
```

## 🌐 Deploy

O projeto está disponível online em:
[https://vehicle-tracker-demo.vercel.app](https://vehicle-tracker-demo.vercel.app)

## 📝 Notas Adicionais

- Este projeto foi desenvolvido com foco em performance e usabilidade.
- A API utilizada é fornecida pela empresa como parte do teste técnico.
- O layout segue as especificações do protótipo Figma fornecido.

---

Desenvolvido com ❤️ por [Seu Nome](https://github.com/seu-usuario)