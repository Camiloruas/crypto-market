import styles from "./home.module.css";
export function Home() {
  return (
    <main className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Digite o nome da Moeda... Ex: Bitcoin" />
        <button type="submit" ></button>
      </form>
    </main>
  );
}
