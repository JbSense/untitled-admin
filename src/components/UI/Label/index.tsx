import { ReactNode } from 'react';
import styles from './styles.module.css';

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
};

export default function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}
