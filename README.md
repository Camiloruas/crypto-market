# Crypto Market

Dashboard de criptomoedas desenvolvido com React, TypeScript e Vite. O projeto consome a API da CoinCap para exibir dados reais de mercado, com listagem de ativos, busca por moeda, paginação incremental e interface responsiva.

O objetivo deste projeto é demonstrar domínio de consumo de APIs, organização de código em uma aplicação front-end moderna, uso de rotas, componentização, tipagem estática e boas práticas de arquitetura para criar uma base escalável e fácil de evoluir.

## Visão Geral

O Crypto Market permite acompanhar criptomoedas em uma tabela dinâmica com informações relevantes para leitura rápida do mercado. A aplicação apresenta preço atual, valor de mercado, volume negociado nas últimas 24 horas e variação percentual, além de destacar visualmente resultados positivos e negativos.

O projeto foi estruturado para manter responsabilidades bem separadas, facilitar manutenção e preparar a aplicação para novas funcionalidades como página detalhada de moedas, favoritos, gráficos históricos e alertas de preço.

## Funcionalidades

* Listagem de criptomoedas em tempo real usando a API da CoinCap.
* Paginação incremental com botão para carregar mais ativos.
* Busca por moeda com navegação para rota dinâmica de detalhes.
* Exibição de ícones das criptomoedas usando os símbolos retornados pela API.
* Formatação de preço em dólar com `toLocaleString`.
* Formatação compacta para valores grandes, como valor de mercado e volume.
* Indicador visual de variação positiva ou negativa nas últimas 24 horas.
* Layout responsivo com tabela adaptada para telas menores.
* Página 404 para rotas inexistentes.
* Configuração de API centralizada com variável de ambiente.

## Tecnologias Utilizadas

* React 19
* TypeScript
* Vite
* React Router DOM
* CSS Modules
* React Icons
* ESLint
* CoinCap API

## Arquitetura e Organização

A aplicação segue uma estrutura simples, clara e preparada para crescimento:

```text
src/
  assets/
    logo.png
  components/
    header/
      index.tsx
      header.module.css
    layout/
      index.tsx
  config/
    api.ts
  pages/
    detail/
      index.tsx
      detail.module.css
    home/
      index.tsx
      home.module.css
    notFound/
      index.tsx
  App.tsx
  index.css
  main.tsx
  router.tsx
```

### Decisões de arquitetura

* `src/config/api.ts` centraliza a criação das URLs da API, evitando strings espalhadas pela aplicação.
* `src/router.tsx` concentra as rotas e mantém a navegação desacoplada das páginas.
* `Layout` encapsula a estrutura compartilhada da aplicação, como o cabeçalho.
* Cada página possui seu próprio módulo CSS, reduzindo conflito de estilos.
* Tipos TypeScript descrevem o formato dos dados recebidos da API.
* Componentes e páginas são separados por responsabilidade para facilitar leitura, manutenção e evolução.

## Boas Práticas Aplicadas

* Código organizado por domínio de responsabilidade.
* Componentização da interface.
* Tipagem dos dados externos consumidos pela API.
* Uso de variáveis de ambiente para proteger a chave da API.
* Separação entre configuração, páginas, layout e estilos.
* Uso de CSS Modules para escopo local de estilos.
* Tratamento visual de estados de mercado com classes específicas para lucro e perda.
* Rotas declarativas com `createBrowserRouter`.
* Projeto preparado com ESLint para padronização e qualidade de código.

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, tenha instalado:

* Node.js
* npm
* Uma chave de API da CoinCap

### Instalação

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

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

## Scripts Disponíveis

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
npm run preview
```

Executa uma prévia local da build de produção.

## Integração com API

O projeto utiliza a CoinCap API para buscar informações de mercado das criptomoedas.

Endpoints usados ou preparados na configuração:

* `GET /assets`
* `GET /assets/:assetId`

A chave da API é lida por meio da variável:

```bash
VITE_COINCAP_API_KEY
```

Essa abordagem evita expor a chave diretamente no código e facilita a configuração entre ambientes.

## Destaques Técnicos

* Uso de `useEffect` para carregar os dados iniciais da API.
* Uso de `useState` para controlar lista de moedas, busca e paginação.
* Uso de `useNavigate` para navegação programática baseada na busca.
* Uso de `Link` para navegação entre listagem e detalhes.
* Renderização dinâmica de linhas da tabela com base nos dados da API.
* Cálculo de offset para carregar mais moedas sem substituir a lista anterior.
* Conversão e formatação de dados numéricos para melhorar a experiência do usuário.

## Status do Projeto

Em desenvolvimento.

Funcionalidades já implementadas:

* Listagem de moedas.
* Consumo da API da CoinCap.
* Paginação incremental.
* Busca com rota dinâmica.
* Layout base com header.
* Responsividade da tabela.
* Configuração de ambiente para API key.

Em evolução:

* Página detalhada da moeda.
* Estados de carregamento e erro.
* Testes automatizados.
* Melhorias de acessibilidade.
* Favoritos e persistência local.
* Gráficos históricos.

## Próximas Melhorias

* Criar página detalhada com preço, volume, supply, market cap e link para explorer.
* Adicionar loading skeleton durante o carregamento dos dados.
* Implementar tratamento de erro para falhas de API.
* Normalizar busca para aceitar letras maiúsculas e minúsculas.
* Criar sistema de favoritos com `localStorage`.
* Adicionar gráficos de histórico de preço.
* Adicionar testes com React Testing Library.
* Melhorar acessibilidade da tabela e dos botões.

## Aprendizados Demonstrados

Este projeto demonstra prática com:

* Consumo de API externa em aplicação React.
* Estruturação de projeto front-end com TypeScript.
* Rotas dinâmicas e layout compartilhado.
* Estado, efeitos colaterais e eventos de formulário.
* Formatação de dados para interface de usuário.
* CSS modularizado e responsivo.
* Configuração de ambiente com Vite.
* Organização de código pensando em manutenção e evolução.

## Autor

Camilo Ruas

GitHub: https://github.com/Camiloruas

LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/

## Licença

Este projeto é open source e está disponível sob a licença MIT.
