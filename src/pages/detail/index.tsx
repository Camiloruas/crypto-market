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

        console.log(data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }

    getCoin();
  }, [cripto, navigate]);

  return (
    <div>
      <h1>Página Detalhada de Moeda {cripto}</h1>
    </div>
  );
}
