import FormSignIn from '@/components/Forms/SignIn';
import styles from './page.module.css';

export default function SignIn() {
  return (
    <div className={styles['sign-in']}>
      <FormSignIn />
    </div>
  );
}
