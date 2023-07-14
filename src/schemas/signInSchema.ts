import { z } from 'zod';

export const SignInSchema = z.object({
  user: z.string().nonempty('Informe o seu email!'),
  password: z
    .string()
    .min(8, 'Digite uma senha válida')
    .nonempty('Informe a sua senha!')
});
