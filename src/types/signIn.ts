import { SignInSchema } from '@/schemas/signInSchema';
import { z } from 'zod';

export type SignIn = {
  user: string;
  password: string;
};

export type SignInForm = z.infer<typeof SignInSchema>;
