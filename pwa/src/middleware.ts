import { routing } from '@/i18n/routing';
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from "next/server";

const publicPages = [
  '/',
  '/login',
  '/about-us',
  '/dashboard/auth/signup',
  '/docs',
  '/dev'
  // (/secret requires auth)
];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({token}) => token != null
    },
    pages: {
      signIn: '/login'
    }
  }
);

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
/* if ((token as any)?.error === "RefreshAccessTokenError") {
      console.log("=============== 99 ======================");
      //return NextResponse.redirect(new URL("/login", req.url));
      return NextResponse.redirect(new URL("/dashboard/auth/login", req.url));
    }*/
  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};





/*export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Здесь твоя кастомная логика
    if ((token as any)?.error === "RefreshAccessTokenError") {
      console.log("=============== 99 ======================");
      //return NextResponse.redirect(new URL("/login", req.url));
      return NextResponse.redirect(new URL("/dashboard/auth/login", req.url));
    }

    //const error = req.cookies.get("auth_error")?.value;
    //
    //if (error === "RefreshAccessTokenError") {
    //  console.log("=== COOKIE ERROR DETECTED ===");
    //
    //  // Удаляем cookie, чтобы не зациклить редирект
    //  const res = NextResponse.redirect(new URL("/login", req.url));
    //  res.cookies.delete("auth_error");
    //  return res;
    //}

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/dashboard/auth/login", //signIn: "/login",
    },
  }
);*/

/*export const config = {
  matcher: ['/profile', '/profile-client', '/dashboard/profile'], //'/dashboard/:path*'
};*/

//export { default } from 'next-auth/middleware'
//
//export const config = {
//  matcher: ['/profile', '/profile-client', '/dashboard/:path*']
//}
