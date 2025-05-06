import { NextRequest, NextResponse } from 'next/server'

import { LOGIN_CREDENTIALS } from './src/config/constant'
import { API_BASE_URL } from './src/config/env'
import { cartPath, paymentPath, productsPath } from './src/config/paths'
import { captureSentryException } from './src/utils/sentry'

const protectedRoutes = [productsPath(), cartPath(), paymentPath()]

function clearCookies(name: string, response: NextResponse) {
  response.cookies.delete(name)
}

async function saveUserProfileToCookies(
  response: NextResponse,
  loginResponse: Response
) {
  const data = await loginResponse.json()

  response.cookies.set('userData', JSON.stringify(data), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/'
  })
}

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const response = NextResponse.next()

  if (isProtectedRoute) {
    const userData = response.cookies.get('userData')?.value
    const user = userData ? JSON.parse(userData) : null

    if (user?.refreshToken) {
      return NextResponse.next()
    }

    try {
      const res = await fetch(`${API_BASE_URL}auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: LOGIN_CREDENTIALS.username,
          password: LOGIN_CREDENTIALS.password
        }),
        credentials: 'include'
      })

      await saveUserProfileToCookies(response, res)
    } catch (error: any) {
      console.error(error)
      clearCookies('userData', response)
      captureSentryException(error)
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
