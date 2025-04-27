import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, color = 'primary', ...rest }) => {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;