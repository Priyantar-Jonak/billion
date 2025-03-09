import styles from "./page.module.css";
import Counter from "../component/Counter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Counter id="counter1"/>
        <Counter id="counter2"/>
        <Counter id="counter3"/>
      </main>
    </div>
  );
}