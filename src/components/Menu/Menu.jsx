import styles from "./Menu.module.css";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router-dom";

export default function Menu({ isLoggedIn, onLogin, onLogout }) {
  const AuthMessage = ({ isLoggedIn }) => (
    <div>
      <span className={styles.authText}>
        {isLoggedIn
          ? "Ви увійшли в систему!"
          : "Увійдіть в систему"}
      </span>
      <div className={styles.button}>
        {isLoggedIn ? (
          <LogoutButton onLogout={onLogout} />
        ) : (
          <LoginButton onLogin={onLogin} />
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.menu}>
      <h2>Меню</h2>
      <AuthMessage isLoggedIn={isLoggedIn} />
      <div className={styles.category_links}>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/">
          <button>Main Page</button>
        </Link>
        <Link to="/about">
          <button>About us</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/debug">
          <button>Debug</button>
        </Link>
      </div>
    </div>
  );
}
