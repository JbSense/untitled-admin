import { ButtonProps } from '@/types/button';
import styles from './styles.module.css';

export default function PrimaryButton({
  children,
  onClick,
  type
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={styles['primary-button']}>
      {children}
    </button>
  );
}
