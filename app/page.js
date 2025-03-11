import styles from "./page.module.css";
import Counter from "../component/Counter";
import clientPromise from "@/utilities/mongo";

export default function Home() {

  clientPromise.db.collection("users").find({ age : 32});

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Counter name="counter1" id="counter1"/>
        <Counter name="counter2" id="counter2"/>
        <Counter name="counter3" id="counter3"/>
      </main>
    </div>
  );
}