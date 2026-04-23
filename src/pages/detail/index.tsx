import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCoincapAssetDetailsUrl } from "../../config/api";
import type { CoinProps } from "../home";
import styles from "./detail.module.css";

interface ResponseData {
  data: CoinProps;
}

interface ErrorData {
  error: string;
}

type DataProps = ResponseData | ErrorData;

export function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();
  const [coin, setcoin] = useState<CoinProps>();
  const [loading, setLoading] = useState(true);

  function formatCurrency(value: string) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "USD",
    });
  }

  function formatCompact(value: string) {
    return Number(value).toLocaleString("pt-BR", {
      notation: "compact",
      maximumFractionDigits: 2,
    });
  }

  useEffect(() => {
    async function getCoin() {
      try {
        if (!cripto) {
          navigate("/");
          return;
        }
        const response = await fetch(getCoincapAssetDetailsUrl(cripto));
        const data: DataProps = await response.json();
        if ("error" in data) {
          navigate("/");
          return;
        }

        const resultData = {
          ...data.data,
          formattedPrice: formatCurrency(data.data.priceUsd),
          formattedMarket: formatCompact(data.data.marketCapUsd),
          formattedVolume: formatCompact(data.data.volumeUsd24Hr),
          formattedChange: `${Number(data.data.changePercent24Hr).toFixed(2)}%`,
        };
        setcoin(resultData);
        setLoading(false);
        console.log(resultData);
      } catch (err) {
        console.log(err);
        navigate("/");
        return;
      }
    }

    getCoin();
  }, [cripto, navigate]);

  if (loading || !coin) {
    return (
      <div className={styles.container}>
        <h2 className={styles.center}>Carregando Detalhes</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{coin?.name}</h1>
      <h1 className={styles.center}>{coin?.symbol}</h1>
      <section className={styles.content}>
        <img
          className={styles.logo}
          src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
          alt="Logo da Moeda"
        />
        <h1>
          {coin?.name} | {coin?.symbol}
        </h1>
        <p>
          <strong> Preço:</strong> {coin?.formattedPrice}
        </p>
        <a>
          <strong> Mercado:</strong> {coin?.formattedMarket}
        </a>
        <a>
          <strong> Volume:</strong> {coin?.formattedVolume}
        </a>
        <a>
          <strong> Mudança 24h: </strong>
          <span
            className={
              Number(coin?.changePercent24Hr) > 0 ? styles.profit : styles.loss
            }
          >
            {Number(coin?.changePercent24Hr).toFixed(3)}
          </span>
        </a>
      </section>
    </div>
  );
}
