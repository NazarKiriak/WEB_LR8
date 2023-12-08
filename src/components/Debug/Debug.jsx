import { useContext } from "react";
import { HistoryContext } from "../NavigationHistory/NavigationHistory";
import styles from "./Debug.module.css";

export default function Debug() {
  const { history } = useContext(HistoryContext);

  return (
    <div className={styles.debug}>
      <div className={styles.wrapper}>
        <h2>Історія перебування користувача</h2>
        <ol>
          {history.map((path, index) => (
            <li key={index}>{path}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
