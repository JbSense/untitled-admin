import LogoUntitled from '@/components/LogoUntitled';
import { ReactNode } from 'react';
import styles from './layout.module.css';

export const metadata = {
  title: 'Admin - sign in',
  description: 'Login para a página de administração do site.'
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles['admin-layout']}>
      <LogoUntitled />
      {children}
    </div>
  );
}
