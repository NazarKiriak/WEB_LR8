import React from "react";
import styles from "./LogoutButton.module.css";

export default function LogoutButton({ onLogout }) {
  return (
    <button onClick={onLogout} className={styles.logoutButton}>
      Вийти
    </button>
  );
}
