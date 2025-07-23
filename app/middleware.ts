// yeshalal-app/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow consumer-view route for everyone
  if (pathname.startsWith('/consumer-view')) {
    return NextResponse.next()
  }

  // Restrict all other routes to logged-in users (or allow for now for dev)
  // You can later add session/wallet check here
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
}
