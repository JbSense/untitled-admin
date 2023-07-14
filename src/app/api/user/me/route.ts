import { decrypt } from '@/services/auth/decrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const tokenData = decrypt(request.headers.get('Authorization') ?? '');

  if (!tokenData)
    return NextResponse.json({
      success: false,
      message: 'Token inválido'
    });

  return NextResponse.json({
    success: true,
    data: tokenData
  });
}
