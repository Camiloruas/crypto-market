import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCoincapAssetDetailsUrl } from '../../config/api';
import type { CoinProps } from '../home';

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

  function formatCurrency(value: string) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'USD',
    });
  }

  function formatCompact(value: string) {
    return Number(value).toLocaleString('pt-BR', {
      notation: 'compact',
      maximumFractionDigits: 2,
    });
  }

  useEffect(() => {
    async function getCoin() {
      try {
        if (!cripto) {
          navigate('/');
          return;
        }
        const response = await fetch(
          getCoincapAssetDetailsUrl(cripto),
        );
        const data: DataProps = await response.json();
        if ('error' in data) {
          navigate('/');
          return;
        }

        const resultData = {
          ...data.data,
          formattedPrice: formatCurrency(
            data.data.priceUsd,
          ),
          formattedMarket: formatCompact(
            data.data.marketCapUsd,
          ),
          formattedVolume: formatCompact(
            data.data.volumeUsd24Hr,
          ),
          formattedChange: `${Number(data.data.changePercent24Hr).toFixed(2)}%`,
        };

        console.log(resultData);
      } catch (err) {
        console.log(err);
        navigate('/');
        return;
      }
    }

    getCoin();
  }, [cripto, navigate]);

  return (
    <div>
      <h1>Página Detalhada de Moedas {cripto}</h1>
    </div>
  );
}
