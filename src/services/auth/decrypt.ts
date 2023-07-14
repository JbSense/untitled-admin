import { Token } from '@/types/token';
import jwt from 'jsonwebtoken';

export const decrypt = (token: string) => {
  try {
    const decode = jwt.verify(token, process.env.PRIVATE_KEY || '') as Token;

    return decode.data;
  } catch (error) {
    return false;
  }
};
