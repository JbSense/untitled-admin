import { prismaCLient } from '@/utils/prismaClient';
import { User } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const users = await prismaCLient.user.findMany({
    select: {
      id: true,
      user: true,
      email: true
    }
  });

  return NextResponse.json({
    success: true,
    data: users
  });
}

export async function POST(request: NextRequest) {
  const { email, user, password } = (await request.json()) as User;

  if (password.split('').length < 8)
    return NextResponse.json({
      success: false,
      message: 'Senha deve ter no mínimo 8 caracteres'
    });

  if (!email.includes('@'))
    return NextResponse.json({
      success: false,
      message: 'Email inválido'
    });

  const existUser = await prismaCLient.user.findMany({
    where: {
      OR: [{ email }, { user }]
    }
  });

  if (existUser.length > 0)
    return NextResponse.json({
      success: false,
      message: 'Usuário já existe'
    });

  const newUser = await prismaCLient.user.create({
    data: {
      email,
      user,
      password
    },
    select: {
      id: true,
      user: true,
      email: true
    }
  });

  return NextResponse.json({
    success: true,
    message: 'Usuário criado com sucesso',
    data: newUser
  });
}
