import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import logo from "../../assets/CapysLogo.png";

const Register: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [contato, setContato] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          confirmarSenha,
          bio,
          contato,
          cargo,
        }),
      });
      
      // example: {
      //   "nome": "Teste",
      //   "email": "teste@email.com",
      //   "senha": "123456",
      //   "confirmarSenha": "123456",
      //   "bio": "Sou desenvolvedor",
      //   "contato": "31999999999",
      //   "cargo": "frontend"
      // }

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      } else {
        alert("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao tentar cadastrar. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="Capys Logo" className={styles.logo} />
          <button
            className={styles.backButton}
            onClick={() => navigate("/login")}
          >
            Voltar
          </button>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleRegister}>
        <h1 className={styles.title}>Crie sua conta</h1>
        <p className={styles.subtitle}>Rápido e grátis, vamos nessa</p>

        <FormInput
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

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
          togglePassword={() => setMostrarSenha(!mostrarSenha)}
          mostrarSenha={mostrarSenha}
          required
        />

        <FormInput
          label="Confirmar Senha"
          type={mostrarConfirmarSenha ? "text" : "password"}
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          togglePassword={() =>
            setMostrarConfirmarSenha(!mostrarConfirmarSenha)
          }
          mostrarSenha={mostrarConfirmarSenha}
          required
        />

        <FormInput
          label="Bio"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />

        <FormInput
          label="Contato"
          type="text"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
        />

        <div className={styles.inputGroup}>
          <label className={styles.label}>Selecionar Cargo</label>
          <select
            className={styles.input}
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="frontend">Desenvolvedor Front-End</option>
            <option value="backend">Desenvolvedor Back-End</option>
            <option value="fullstack">Desenvolvedor Full Stack</option>
          </select>
        </div>

        <Button type="submit" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default Register;
