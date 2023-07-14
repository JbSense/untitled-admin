import { BASE_URL } from '@/constants/baseURL';
import { Response } from '@/types/response';
import { SignInForm } from '@/types/signIn';
import { TokenData } from '@/types/token';
import axios from 'axios';
import { cookies } from 'next/headers';

export const api = () => {
  const sessionToken = cookies().get('sessionToken');

  const http = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${sessionToken?.value}` }
  });

  const signIn = async (data: SignInForm) => {
    const { data: response } = await http.post<Response<TokenData>>(
      '/admin/auth/sign-in',
      data
    );

    return response;
  };

  return {
    signIn
  };
};
