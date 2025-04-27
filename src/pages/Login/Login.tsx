import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import logo from "../../assets/CapysLogo.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

      // example: {
      //  email: "teste@capys.com",
      //  senha: "123456"
      // }

      if (response.ok) {
        const data = await response.json();
        console.log("Login realizado, token:", data.token);
        navigate("/home");
      } else {
        alert("Email ou senha inválidos!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao tentar logar. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Capys Logo" className={styles.logo} />

      <form className={styles.form} onSubmit={handleLogin}>
        <h1 className={styles.title}>Login</h1>

        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormInput
          label="Senha"
          type={mostrarSenha ? "text" : "password"}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          togglePassword={() => setMostrarSenha(!mostrarSenha)}
          mostrarSenha={mostrarSenha}
        />

        <Button type="submit" color="primary">
          Entrar
        </Button>

        <div className={styles.registerArea}>
          <p>Ainda não possui uma conta?</p>
          <Button
            type="button"
            color="secondary"
            onClick={() => (window.location.href = "/register")}
          >
            Cadastre-se
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
