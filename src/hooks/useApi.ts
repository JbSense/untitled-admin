'use client';

import { BASE_URL } from '@/constants/baseURL';
import { Response } from '@/types/response';
import { SignInForm } from '@/types/signIn';
import { TokenResponse } from '@/types/token';
import axios from 'axios';
import { useStorage } from './useStorage';

export const useApi = () => {
  const { getItem } = useStorage();

  const sessionToken = JSON.parse(getItem('sessionToken') ?? '{}');

  const http = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${sessionToken}` }
  });

  const signIn = async (data: SignInForm) => {
    const { data: response } = await http.post<Response<TokenResponse>>(
      '/admin/auth/sign-in',
      data
    );

    return response;
  };

  return {
    signIn
  };
};
