import { prismaCLient } from '@/utils/prismaClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const user = await prismaCLient.user.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      user: true,
      email: true
    }
  });

  return NextResponse.json({
    success: true,
    data: user
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const existUser = await prismaCLient.user.findUnique({
    where: {
      id: id
    }
  });

  if (existUser === null)
    return NextResponse.json({
      success: false,
      message: 'Usuário não encontrado.'
    });

  const user = await prismaCLient.user.delete({
    where: {
      id: id
    },
    select: {
      id: true
    }
  });

  return NextResponse.json({
    success: true,
    message: 'Usuário excluído com sucesso.',
    data: user
  });
}
