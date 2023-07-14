import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const token = request.headers.get('Authorization');

  if (session === undefined && token === null)
    return NextResponse.json({
      success: false,
      message: 'Sem autorização'
    });
}

export const config = {
  matcher: ['/api/user/:path*']
};
