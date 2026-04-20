import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { BsSearch } from 'react-icons/bs';
export function Home() {
  return (
    <main className={styles.container}>
      <form action='' className={styles.form}>
        <input
          type='text'
          placeholder='Digite o nome da Moeda... Ex: Bitcoin'
        />
        <button type='submit'>
          <BsSearch size={30} color='#fff' />
        </button>
      </form>

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
          <tr className={styles.tr} data-label='Moeda'>
            <td className={styles.tdLabel}>
              <div className={styles.name}>
                <Link to={'detail/bitcon'}>
                  <span>Biticon</span> | BTC
                </Link>
              </div>
            </td>
            <td
              className={styles.tdLabel}
              data-label='Valor mercado'
            >
              1T
            </td>
            <td
              className={styles.tdLabel}
              data-label='Preço'
            >
              8.000
            </td>
            <td
              className={styles.tdLabel}
              data-label='Volume'
            >
              2B
            </td>
            <td
              className={styles.tdLabel}
              data-label='Mudança 24H'
            >
              <span>1.20</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
