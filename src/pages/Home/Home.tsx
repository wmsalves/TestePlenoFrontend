import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../../assets/CapysLogo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Capys Logo" className={styles.logo} />
        <button className={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.welcomeMessage}> Olá, Teste Capys!</h1>
      </main>
    </div>
  );
};

export default Home;
