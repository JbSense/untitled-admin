'use client';

import PrimaryButton from '@/components/UI/Buttons/Primary';
import Input from '@/components/UI/Input';
import Label from '@/components/UI/Label';
import { useSignIn } from '@/hooks/forms/useSignIn';
import styles from './styles.module.css';

export default function FormSignIn() {
  const { errors, invalidate, onSubmit, register } = useSignIn();

  return (
    <form onSubmit={onSubmit} className={styles['form-sign-in']}>
      <h2 className={styles['form-sign-in__title']}>Bem vindo a Untitled</h2>

      {invalidate && (
        <p className={styles['form-sign-in__invalidate']}>Login inválido</p>
      )}

      <div className={styles['form-sign-in__fields']}>
        <Input
          {...register('user')}
          type="text"
          name="user"
          error={errors.user ? 'error' : ''}
          label={<Label htmlFor="user">Usuário</Label>}
        />

        <Input
          {...register('password')}
          type="password"
          name="password"
          error={errors.password ? 'error' : ''}
          label={<Label htmlFor="password">Senha</Label>}
        />
      </div>

      <PrimaryButton type="submit" onClick={onSubmit}>
        Entrar
      </PrimaryButton>
    </form>
  );
}
