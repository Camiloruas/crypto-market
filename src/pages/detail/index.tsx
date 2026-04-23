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
        <div className={styles.cardHeader}>
          <img
            className={styles.logo}
            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
            alt="Logo da Moeda"
          />
          <h1>
            {coin?.name} | {coin?.symbol}
          </h1>
        </div>

        <div className={styles.details}>
          <p>
            <strong>Preço:</strong> {coin?.formattedPrice}
          </p>
          <p>
            <strong>Mercado:</strong> {coin?.formattedMarket}
          </p>
          <p>
            <strong>Volume:</strong> {coin?.formattedVolume}
          </p>
          <p>
            <strong>Mudança 24h:</strong>{" "}
            <span
              className={
                Number(coin?.changePercent24Hr) > 0
                  ? styles.profit
                  : styles.loss
              }
            >
              {Number(coin?.changePercent24Hr).toFixed(3)}
            </span>
          </p>
        </div>
      </section>

      <div className={styles.backButtonArea}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
}
