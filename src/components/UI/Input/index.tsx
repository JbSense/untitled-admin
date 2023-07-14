'use client';

import { useTheme } from '@/hooks/useTheme';
import { workSans } from '@/utils/fonts';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label: Label, name, type, placeholder, ...props }, ref) => {
    const { currentTheme } = useTheme();

    return (
      <div
        className={`${styles.input} ${styles[error ? error : '']}  ${
          styles[currentTheme]
        }`}
      >
        {Label}

        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          step={0.01}
          ref={ref}
          {...props}
          className={`${styles['input__field']} ${workSans.className}`}
        />
      </div>
    );
  }
);

export default Input;
