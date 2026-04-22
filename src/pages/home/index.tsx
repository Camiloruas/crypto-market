import { Link, useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { getCoincapAssetsUrl } from '../../config/api';

// Interface que descreve o formato de cada moeda recebida da API.
// Ela ajuda o TypeScript a saber quais propriedades existem em cada moeda.
interface CoinProps {
  id: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  explorer: string;
}

// Interface que descreve o formato geral da resposta da API.
// A API retorna um objeto com uma propriedade "data", que é uma lista de moedas.
interface DataProps {
  data: CoinProps[];
}

export function Home() {
  // Estado que guarda o texto digitado no campo de busca.
  const [input, setInput] = useState('');

  // Estado que guarda a lista de moedas que será exibida na tabela.
  const [coins, setCoins] = useState<CoinProps[]>([]);

  const [offset, setOffset] = useState(0);

  // Hook do React Router usado para navegar para outra página pelo código.
  const navigate = useNavigate();

  // Função responsável por buscar as moedas na API da CoinCap.
  async function getData(currentOffset = 0) {
    fetch(getCoincapAssetsUrl(currentOffset))
      // Converte a resposta da API para JSON.
      .then((response) => response.json())
      .then((data: DataProps) => {
        // Mostra os dados no console do navegador, útil para estudar/debugar.
        console.log(data);

        // Salva a lista de moedas no estado "coins".
        // Quando o estado muda, o React atualiza a tabela na tela.
        setCoins((prevCoins) =>
          currentOffset === 0
            ? data.data
            : [...prevCoins, ...data.data],
        );
      });
  }

  // useEffect executa uma ação quando o componente é carregado na tela.
  // Como o array de dependências está vazio, ele roda apenas uma vez.
  useEffect(() => {
    getData();
  }, []);

  // Função chamada quando o usuário envia o formulário de busca.
  function handleSubmit(e: FormEvent) {
    // Impede o comportamento padrão do formulário, que seria recarregar a página.
    e.preventDefault();

    // Se o campo estiver vazio, a função para aqui e não navega.
    if (input === '') return;

    // Navega para a página de detalhes usando o texto digitado no input.
    navigate(`/detail/${input}`);
  }

  // Função chamada ao clicar no botão "Carregar mais...".
  // Busca a próxima página de moedas usando o offset atual.
  function handleGetMore() {
    const nextOffset = offset + 10;

    setOffset(nextOffset);
    getData(nextOffset);
  }

  // Formata um valor numérico em formato de moeda.
  // Exemplo: "67000" vira algo como "US$ 67.000,00".
  function formatCurrency(value: string) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'USD',
    });
  }

  // Formata números grandes em formato compacto.
  // Exemplo: "1000000000" vira "1 bi" dependendo do navegador/idioma.
  function formatCompact(value: string) {
    return Number(value).toLocaleString('pt-BR', {
      notation: 'compact',
      maximumFractionDigits: 2,
    });
  }

  return (
    <main className={styles.container}>
      {/* Formulário de busca de moedas */}
      <form
        action=''
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Digite o nome da Moeda... Ex: Bitcoin'
          value={input}
          // Atualiza o estado "input" sempre que o usuário digita.
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Botão que envia o formulário e executa a busca */}
        <button type='submit'>
          <BsSearch size={30} color='#fff' />
        </button>
      </form>

      {/* Tabela onde as moedas são exibidas */}
      <table>
        <thead>
          <tr>
            <th scope='col'>Moeda</th>
            <th scope='col'>Valor de Mercado</th>
            <th scope='col'>Preço</th>
            <th scope='col'> Volume</th>
            <th scope='col'> Mudança</th>
          </tr>
        </thead>

        <tbody id='tbody'>
          {/* Percorre a lista de moedas e cria uma linha da tabela para cada uma */}
          {coins.length > 0 &&
            coins.map((coin) => (
              <tr key={coin.id} className={styles.tr}>
                <td
                  className={styles.tdLabel}
                  data-label='Moeda'
                >
                  <div className={styles.name}>
                    <img
                      className={styles.log}
                      src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                      alt=''
                    />
                    {/* Link para a página de detalhes da moeda */}
                    <Link to={`/detail/${coin.id}`}>
                      <span>{coin.id}</span> | {coin.symbol}
                    </Link>
                  </div>
                </td>

                {/* Valor de mercado da moeda formatado de forma compacta */}
                <td
                  className={styles.tdLabel}
                  data-label='Valor mercado'
                >
                  {formatCompact(coin.marketCapUsd)}
                </td>

                {/* Preço atual da moeda formatado como dinheiro */}
                <td
                  className={styles.tdLabel}
                  data-label='Preço'
                >
                  {formatCurrency(coin.priceUsd)}
                </td>

                {/* Volume negociado nas últimas 24 horas */}
                <td
                  className={styles.tdLabel}
                  data-label='Volume'
                >
                  {formatCompact(coin.volumeUsd24Hr)}
                </td>
                <td
                  // Se a mudança for positiva ou zero, usa estilo de lucro.
                  // Se for negativa, usa estilo de prejuízo.
                  className={
                    Number(coin.changePercent24Hr) >= 0
                      ? styles.tdProfit
                      : styles.tdLoss
                  }
                  data-label='Mudança 24H'
                >
                  {/* Mostra a mudança percentual com 2 casas decimais */}
                  <span>
                    {Number(coin.changePercent24Hr).toFixed(
                      2,
                    )}
                    %
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Botão preparado para carregar mais moedas futuramente */}
      <button
        className={styles.buttunMore}
        onClick={handleGetMore}
      >
        Carregar mais...
      </button>
    </main>
  );
}
