import { encrypt } from '@/services/auth/encrypt';
import { SignIn } from '@/types/signIn';
import { prismaCLient } from '@/utils/prismaClient';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { user, password } = (await request.json()) as SignIn;

  const userData = await prismaCLient.user.findUnique({
    where: {
      user
    }
  });

  if (userData === null || userData.password !== password) {
    return NextResponse.json({
      success: false,
      messsage: 'Usuário ou senha inválidos'
    });
  }

  const token = encrypt({
    id: userData.id,
    user: userData.user
  });

  cookies().set('session', token);

  return NextResponse.json({
    success: true,
    data: {
      token
    }
  });
}
