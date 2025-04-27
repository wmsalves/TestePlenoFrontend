import React, { InputHTMLAttributes } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconType } from "react-icons";
import styles from "./FormInput.module.css";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  togglePassword?: () => void;
  mostrarSenha?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  togglePassword,
  mostrarSenha,
  ...rest
}) => {
  const EyeIcon: IconType = mostrarSenha ? FaEyeSlash : FaEye;

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input className={styles.input} type={type} {...rest} />
        {togglePassword && (
          <span className={styles.togglePassword} onClick={togglePassword}>
            <EyeIcon size={20} />
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInput;
