import { SignInSchema } from '@/schemas/signInSchema';
import { SignInForm } from '@/types/signIn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useApi } from '../useApi';
import { useStorage } from '../useStorage';

export const useSignIn = () => {
  const { signIn } = useApi();
  const { setItem } = useStorage();
  const { push } = useRouter();

  const [invalidate, setInvalidate] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<SignInForm>({
    mode: 'all',
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      user: '',
      password: ''
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn(data);

    if (!response.success) return setInvalidate(true);

    setItem('session', response.data?.token);

    return push('/');
  });

  return {
    errors,
    invalidate,
    onSubmit,
    register
  };
};
