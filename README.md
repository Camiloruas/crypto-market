# Crypto Market

## English

Crypto Market is a cryptocurrency dashboard built with React, TypeScript and Vite. The application consumes the CoinCap API to display real market data, including asset listing, search, incremental pagination, dynamic detail pages and a responsive interface.

The goal of this project is to demonstrate API consumption, front-end architecture, routing, componentization, static typing, styling with CSS Modules and automated testing practices in a modern React application.

### Overview

Crypto Market allows users to track cryptocurrencies through a dynamic table focused on quick market reading. The application displays current price, market cap, 24-hour volume and percentage change, with visual indicators for positive and negative variations.

The project was structured with clear responsibilities so it can be maintained and expanded with new features such as favorites, historical charts, advanced error states and improved accessibility.

### Features

* Real-time cryptocurrency listing using the CoinCap API.
* Incremental pagination with a "load more" button.
* Search by asset name or id with navigation to a dynamic detail route.
* Cryptocurrency icons rendered from the symbols returned by the API.
* Detail page for each cryptocurrency.
* Back button on the detail page.
* Footer with contact links and portfolio link.
* Price formatting in USD using `toLocaleString`.
* Compact formatting for large values such as market cap and volume.
* Visual indicator for positive and negative 24-hour market changes.
* Responsive table layout for smaller screens.
* 404 page for unknown routes.
* Centralized API configuration with environment variables.

### Technologies

* React 19
* TypeScript
* Vite
* React Router DOM
* CSS Modules
* React Icons
* ESLint
* Vitest
* React Testing Library
* Jest DOM
* User Event
* JSDOM
* MSW
* CoinCap API

### Architecture And Organization

The application follows a simple and scalable structure:

```text
src/
  assets/
    logo.png
  components/
    footer/
      footer.module.css
      footer.test.tsx
      index.tsx
    header/
      header.module.css
      index.tsx
    layout/
      index.tsx
  config/
    api.test.ts
    api.ts
  pages/
    detail/
      detail.module.css
      index.tsx
    home/
      home.module.css
      home.test.tsx
      index.tsx
    notFound/
      index.tsx
  App.tsx
  index.css
  main.tsx
  router.tsx
```

### Architecture Decisions

* `src/config/api.ts` centralizes CoinCap API URL generation and avoids duplicated strings across the application.
* `src/router.tsx` keeps routing rules separated from page implementation.
* `Layout` composes the shared page structure with `Header`, page content and `Footer`.
* `Header` and `Footer` are independent components, following composition and single responsibility principles.
* Each page has its own CSS Module to reduce style conflicts.
* TypeScript types describe the data consumed from the external API.
* Components and pages are separated by responsibility to improve readability, maintenance and evolution.

### Best Practices Applied

* Code organized by responsibility.
* Componentized interface.
* Typed external API data.
* Environment variables for API key configuration.
* Separation between configuration, routing, layout, pages and styles.
* CSS Modules for locally scoped styles.
* Visual treatment for profit and loss states.
* Declarative routing with `createBrowserRouter`.
* ESLint for code quality.
* Automated tests with Vitest and React Testing Library.

### How To Run

#### Prerequisites

Before starting, make sure you have:

* Node.js
* npm
* A CoinCap API key

#### Installation

Clone the repository:

```bash
git clone git@github.com:Camiloruas/crypto-market.git
```

Open the project folder:

```bash
cd crypto-market
```

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example`:

```bash
VITE_COINCAP_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

### Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Runs TypeScript checks and generates the production build.

```bash
npm run lint
```

Runs ESLint code analysis.

```bash
npm test
```

Runs the automated test suite once with Vitest.

```bash
npm run test:watch
```

Runs tests in watch mode during development.

```bash
npm run preview
```

Serves a local preview of the production build.

### Testing And Quality

The project includes quality checks and automated tests to reduce risks before deployment.

```bash
npm run build
```

Validates TypeScript types and production build generation. This helps catch typing errors, import issues, invalid JSX and build blockers.

```bash
npm run lint
```

Runs ESLint to detect code quality issues, hook usage problems, import issues and maintainability risks.

```bash
npm test
```

Runs the automated test suite with Vitest.

#### Automated Tests Applied

* `src/config/api.test.ts`: unit tests for CoinCap API URL generation, including `limit`, `offset`, `assetId` and `apiKey`.
* `src/components/footer/footer.test.tsx`: component tests for the `Footer`, validating portfolio, GitHub, LinkedIn and WhatsApp links.
* `src/pages/home/home.test.tsx`: component test for `Home` with mocked `fetch`, validating cryptocurrency rendering, detail link, formatted price and percentage change.

#### Installed Testing Libraries

* Vitest for running tests in a Vite-friendly environment.
* React Testing Library for testing components from the user's perspective.
* Jest DOM for expressive DOM matchers such as `toBeInTheDocument`.
* User Event for future user interaction simulations.
* JSDOM for simulating a browser-like environment.
* MSW for future API mocking in integration tests without depending on the real CoinCap API.

#### Test Evolution Strategy

Recommended next steps for expanding test coverage:

* Unit tests for formatting functions such as currency, compact numbers and percentage change.
* Component tests for `Header` and `Detail`.
* Integration tests for search, navigation to details and returning to the home page.
* Error tests for unknown assets, API failures and missing route parameters.
* Accessibility tests for links, buttons, tables and keyboard navigation.
* End-to-end tests for the main user flow in a real browser environment.

### API Integration

The project uses the CoinCap API to fetch cryptocurrency market data.

Endpoints used or prepared in the configuration:

* `GET /assets`
* `GET /assets/:assetId`

The API key is read from:

```bash
VITE_COINCAP_API_KEY
```

This approach keeps the key outside the source code and makes configuration easier across environments.

### Technical Highlights

* `useEffect` for initial API loading.
* `useState` for list, search, pagination and loading state management.
* `useNavigate` for programmatic navigation.
* `Link` for navigation between listing and detail pages.
* Dynamic table rendering based on API data.
* Offset calculation to load more assets without replacing the previous list.
* Numeric formatting for a better user experience.
* Component tests with mocked API responses.

### Project Status

In development.

Implemented:

* Asset listing.
* CoinCap API consumption.
* Incremental pagination.
* Search with dynamic route navigation.
* Detail page.
* Shared layout with header and footer.
* Footer with contact links and portfolio link.
* Responsive table.
* API key environment configuration.
* Initial automated tests with Vitest and React Testing Library.

In progress:

* Better loading and error states.
* Expanded automated test coverage.
* Accessibility improvements.
* Favorites and local persistence.
* Historical charts.

### Next Improvements

* Add loading skeletons while data is being fetched.
* Improve API error handling.
* Add favorites using `localStorage`.
* Add historical price charts.
* Expand tests for the detail page and error flows.
* Improve table and button accessibility.
* Add end-to-end tests with Playwright.

### Demonstrated Learning

This project demonstrates practice with:

* External API consumption in React.
* Front-end project structure with TypeScript.
* Dynamic routing and shared layout.
* State, side effects and form events.
* Data formatting for user interfaces.
* Modular and responsive CSS.
* Environment configuration with Vite.
* Automated testing setup and component testing.
* Code organization focused on maintenance and evolution.

### Author

Camilo Ruas

GitHub: https://github.com/Camiloruas

LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/

Portfolio: https://www.camiloruas.dev

### License

This project is open source and available under the MIT License.

---

## Português

Crypto Market é um dashboard de criptomoedas desenvolvido com React, TypeScript e Vite. A aplicação consome a API da CoinCap para exibir dados reais de mercado, com listagem de ativos, busca por moeda, paginação incremental, páginas dinâmicas de detalhes e interface responsiva.

O objetivo deste projeto é demonstrar consumo de APIs, arquitetura front-end, rotas, componentização, tipagem estática, estilização com CSS Modules e práticas de testes automatizados em uma aplicação React moderna.

### Visão Geral

O Crypto Market permite acompanhar criptomoedas em uma tabela dinâmica voltada para leitura rápida do mercado. A aplicação apresenta preço atual, valor de mercado, volume negociado nas últimas 24 horas e variação percentual, com indicadores visuais para resultados positivos e negativos.

O projeto foi estruturado com responsabilidades bem separadas para facilitar manutenção e evolução com novas funcionalidades, como favoritos, gráficos históricos, estados de erro mais completos e melhorias de acessibilidade.

### Funcionalidades

* Listagem de criptomoedas em tempo real usando a API da CoinCap.
* Paginação incremental com botão para carregar mais ativos.
* Busca por nome ou id da moeda com navegação para rota dinâmica de detalhes.
* Exibição de ícones das criptomoedas usando os símbolos retornados pela API.
* Página de detalhes para cada criptomoeda.
* Botão de voltar na página de detalhes.
* Footer com links de contato e portfólio.
* Formatação de preço em dólar com `toLocaleString`.
* Formatação compacta para valores grandes, como valor de mercado e volume.
* Indicador visual de variação positiva ou negativa nas últimas 24 horas.
* Layout responsivo com tabela adaptada para telas menores.
* Página 404 para rotas inexistentes.
* Configuração de API centralizada com variável de ambiente.

### Tecnologias Utilizadas

* React 19
* TypeScript
* Vite
* React Router DOM
* CSS Modules
* React Icons
* ESLint
* Vitest
* React Testing Library
* Jest DOM
* User Event
* JSDOM
* MSW
* CoinCap API

### Arquitetura e Organização

A aplicação segue uma estrutura simples, clara e preparada para crescimento:

```text
src/
  assets/
    logo.png
  components/
    footer/
      footer.module.css
      footer.test.tsx
      index.tsx
    header/
      header.module.css
      index.tsx
    layout/
      index.tsx
  config/
    api.test.ts
    api.ts
  pages/
    detail/
      detail.module.css
      index.tsx
    home/
      home.module.css
      home.test.tsx
      index.tsx
    notFound/
      index.tsx
  App.tsx
  index.css
  main.tsx
  router.tsx
```

### Decisões de Arquitetura

* `src/config/api.ts` centraliza a criação das URLs da API da CoinCap e evita strings duplicadas pela aplicação.
* `src/router.tsx` mantém as regras de rota separadas da implementação das páginas.
* `Layout` compõe a estrutura compartilhada com `Header`, conteúdo da página e `Footer`.
* `Header` e `Footer` são componentes independentes, seguindo composição e responsabilidade única.
* Cada página possui seu próprio CSS Module para reduzir conflitos de estilo.
* Tipos TypeScript descrevem os dados consumidos da API externa.
* Componentes e páginas são separados por responsabilidade para melhorar leitura, manutenção e evolução.

### Boas Práticas Aplicadas

* Código organizado por responsabilidade.
* Interface componentizada.
* Dados externos da API tipados.
* Variáveis de ambiente para configurar a chave da API.
* Separação entre configuração, rotas, layout, páginas e estilos.
* CSS Modules para escopo local de estilos.
* Tratamento visual para estados de lucro e perda.
* Rotas declarativas com `createBrowserRouter`.
* ESLint para qualidade de código.
* Testes automatizados com Vitest e React Testing Library.

### Como Executar o Projeto

#### Pré-requisitos

Antes de começar, tenha instalado:

* Node.js
* npm
* Uma chave de API da CoinCap

#### Instalação

Clone o repositório:

```bash
git clone git@github.com:Camiloruas/crypto-market.git
```

Acesse a pasta do projeto:

```bash
cd crypto-market
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` com base no `.env.example`:

```bash
VITE_COINCAP_API_KEY=sua_chave_da_api_aqui
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com Vite.

```bash
npm run build
```

Executa a checagem TypeScript e gera a versão de produção.

```bash
npm run lint
```

Executa a análise de qualidade de código com ESLint.

```bash
npm test
```

Executa os testes automatizados uma vez com Vitest.

```bash
npm run test:watch
```

Executa os testes em modo observação durante o desenvolvimento.

```bash
npm run preview
```

Executa uma prévia local da build de produção.

### Testes e Qualidade

O projeto conta com validações de qualidade e testes automatizados para reduzir riscos antes da publicação.

```bash
npm run build
```

Valida os tipos do TypeScript e a geração da build de produção. Essa etapa ajuda a identificar erros de tipagem, problemas de importação, JSX inválido e falhas que impediriam a publicação.

```bash
npm run lint
```

Executa o ESLint para identificar problemas de qualidade, uso de hooks, imports e riscos de manutenção.

```bash
npm test
```

Executa a suíte automatizada com Vitest.

#### Testes Automatizados Aplicados

* `src/config/api.test.ts`: testes isolados da criação das URLs da API da CoinCap, incluindo `limit`, `offset`, `assetId` e `apiKey`.
* `src/components/footer/footer.test.tsx`: testes de componente do `Footer`, validando os links de portfólio, GitHub, LinkedIn e WhatsApp.
* `src/pages/home/home.test.tsx`: teste de componente da `Home` com `fetch` mockado, validando renderização da moeda, link para detalhes, preço formatado e variação percentual.

#### Bibliotecas de Teste Instaladas

* Vitest para executar testes em um ambiente compatível com Vite.
* React Testing Library para testar componentes pela perspectiva do usuário.
* Jest DOM para matchers de DOM mais expressivos, como `toBeInTheDocument`.
* User Event para futuras simulações de interação do usuário.
* JSDOM para simular um ambiente parecido com o navegador.
* MSW para futuros mocks de API em testes de integração sem depender da CoinCap real.

#### Estratégia de Evolução dos Testes

Próximos passos recomendados para ampliar a cobertura:

* Testes isolados para funções de formatação, como moeda, números compactos e percentual de variação.
* Testes de componentes para `Header` e `Detail`.
* Testes de integração para busca, navegação para detalhes e retorno para a home.
* Testes de erro para moedas inexistentes, falhas de API e ausência de parâmetro de rota.
* Testes de acessibilidade para links, botões, tabela e navegação por teclado.
* Testes end-to-end para o fluxo principal do usuário em navegador real.

### Integração com API

O projeto utiliza a CoinCap API para buscar informações de mercado das criptomoedas.

Endpoints usados ou preparados na configuração:

* `GET /assets`
* `GET /assets/:assetId`

A chave da API é lida por meio da variável:

```bash
VITE_COINCAP_API_KEY
```

Essa abordagem mantém a chave fora do código-fonte e facilita a configuração entre ambientes.

### Destaques Técnicos

* Uso de `useEffect` para carregar os dados iniciais da API.
* Uso de `useState` para controlar lista, busca, paginação e estado de carregamento.
* Uso de `useNavigate` para navegação programática.
* Uso de `Link` para navegação entre listagem e detalhes.
* Renderização dinâmica da tabela com base nos dados da API.
* Cálculo de offset para carregar mais moedas sem substituir a lista anterior.
* Formatação numérica para melhorar a experiência do usuário.
* Testes de componentes com respostas de API mockadas.

### Status do Projeto

Em desenvolvimento.

Implementado:

* Listagem de moedas.
* Consumo da API da CoinCap.
* Paginação incremental.
* Busca com navegação por rota dinâmica.
* Página de detalhes.
* Layout compartilhado com header e footer.
* Footer com links de contato e portfólio.
* Tabela responsiva.
* Configuração de API key por variável de ambiente.
* Testes automatizados iniciais com Vitest e React Testing Library.

Em evolução:

* Melhores estados de carregamento e erro.
* Ampliação da cobertura de testes automatizados.
* Melhorias de acessibilidade.
* Favoritos e persistência local.
* Gráficos históricos.

### Próximas Melhorias

* Adicionar loading skeleton durante o carregamento dos dados.
* Melhorar tratamento de erro para falhas de API.
* Criar sistema de favoritos com `localStorage`.
* Adicionar gráficos de histórico de preço.
* Ampliar testes para a página de detalhes e fluxos de erro.
* Melhorar acessibilidade da tabela e dos botões.
* Adicionar testes end-to-end com Playwright.

### Aprendizados Demonstrados

Este projeto demonstra prática com:

* Consumo de API externa em React.
* Estruturação de projeto front-end com TypeScript.
* Rotas dinâmicas e layout compartilhado.
* Estado, efeitos colaterais e eventos de formulário.
* Formatação de dados para interface de usuário.
* CSS modularizado e responsivo.
* Configuração de ambiente com Vite.
* Configuração de testes automatizados e testes de componentes.
* Organização de código pensando em manutenção e evolução.

### Autor

Camilo Ruas

GitHub: https://github.com/Camiloruas

LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/

Portfólio: https://www.camiloruas.dev

### Licença

Este projeto é open source e está disponível sob a licença MIT.
