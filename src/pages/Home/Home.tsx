import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../../assets/CapysLogo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/user");
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Capys Logo" className={styles.logo} />
        <button className={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.welcomeMessage}>Olá,Teste Capys!</h1>
      </main>
    </div>
  );
};

export default Home;
