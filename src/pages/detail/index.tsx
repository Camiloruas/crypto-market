import { useParams } from 'react-router-dom';
import styles from './detail.module.css';
import { useEffect } from 'react';

export function Detail() {
  const { cripto } = useParams;

  useEffect(() => {
    async function getCoin() {
      try {
      } catch (error) {}
    }
  }, [cripto]);
  return (
    <div>
      <h1>Página Detalhada de Moeda </h1>
    </div>
  );
}
