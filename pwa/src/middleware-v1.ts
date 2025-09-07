import { routing } from '@/i18n/routing';
import { withAuth } from "next-auth/middleware";
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";

// --- i18n runs globally (normalize locale once)
const i18n = createMiddleware({
  ...routing,                 // locales, defaultLocale, localePrefix: 'as-needed'
});

// --- protected pages (everything else is public)
const protectedPages = [
  '/profile',
  '/profile-client',
  '/dashboard/:path*',
  '/partners/dashboard/:path*',
  '/personal-account/dashboard/:path*'
];

// build a single locale-aware regex
const protectedPathnameRegex = new RegExp(
  `^(/(${routing.locales.join('|')}))?(${protectedPages
    .map((p) => (p === '/' ? '' : p.replace(':path*', '.*')))
    .join('|')})(/|$)`,
  'i'
);
const isProtectedPath = (pathname: string) => protectedPathnameRegex.test(pathname);

// TS guard to narrow a string to your locales union
function isSupportedLocale(v: string): v is (typeof routing.locales)[number] {
  return (routing.locales as readonly string[]).includes(v);
}

// locale-aware redirect to /<locale>/login
function redirectToLocalizedLogin(req: NextRequest) {
  const url = new URL(req.url);
  const seg = url.pathname.split('/')[1] ?? '';
  const loc = isSupportedLocale(seg) ? seg : routing.defaultLocale;
  return NextResponse.redirect(new URL(`/${loc}/login`, req.url));
}

// --- NextAuth: only gate protected paths
const auth = withAuth(
  (req) => {
    const token = req.nextauth.token as any;

    // if refresh failed (set in jwt callback), force re-login
    if (token?.error === 'RefreshAccessTokenError') {
      return redirectToLocalizedLogin(req);
    }

    // optional: role gating example
    if (req.nextUrl.pathname.startsWith('/admin') && token?.role !== 'ROLE_ADMIN') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // continue
    return NextResponse.next();
  },
  {
    pages: {signIn: '/login'}, // locale-agnostic; real page at /[locale]/login
    callbacks: {
      authorized: ({req, token}) => {
        const p = req.nextUrl.pathname;
        if (!isProtectedPath(p)) return true;           // public
        if (!token) return false;                       // no session
        if ((token as any).error === 'RefreshAccessTokenError') return false;
        return true;                                    // ok
      }
    }
  }
);

// --- compose: i18n → auth
export default function middleware(req: NextRequest) {
  const res = i18n(req);

  console.log("=============== 01 ======================");

  if (res) return res;                // i18n may redirect/rewite

  console.log("=============== 02 ======================");

  return (auth as any)(req);          // then auth for protected paths
}

// run on all pages; skip assets & API
export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};


/*const publicPages = [
  '/',
  '/login',
  '/about-us',
  '/dashboard/auth/signup',
  '/docs',
  '/dev',
  '/services',
  '/contact'
  // (/secret requires auth)
];*/

/*const protectedPages = [
  '/profile',
  '/profile-client',
  '/dashboard/:path*',
  '/partners/dashboard/:path*',
  '/personal-account/dashboard/:path*'
];*/

// Build regex for protected pages (locale aware)
/*const protectedPathnameRegex = new RegExp(
  `^(/(${routing.locales.join('|')}))?(${protectedPages
    .flatMap((p) => (p === '/' ? ['', '/'] : p.replace(':path*', '.*')))
    .join('|')})(/|$)`,
  'i'
);
function isProtectedPath(pathname: string): boolean {
  return protectedPathnameRegex.test(pathname);
}
console.log('call', isProtectedPath)
const intlMiddleware = createMiddleware(routing);

export default withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
/*  (req) => {
    const token = req.nextauth.token as any;
    
  function isSupportedLocale(
    v: string
  ): v is (typeof routing.locales)[number] {
    return (routing.locales as readonly string[]).includes(v);
  }
    // example: if refresh failed, force re-login
  if (token?.error === 'RefreshAccessTokenError') {
    const url = new URL(req.url);
    const locale = url.pathname.split('/')[1] ?? '';
    const loc = isSupportedLocale(locale)
    ? locale
    : routing.defaultLocale;
    return NextResponse.redirect(
    new URL(`/${loc}/login`, req.url)
  );
    }
   }, // intlMiddleware(req),*/
   /*function middleware(req) {
    const token = req.nextauth.token; // <--- this is the JWT from callbacks.jwt

    // Debug
    console.log("middleware token:", token);

    // Example: check if user has valid access token
    if (!token?.accessToken) {
      console.log('token', token)
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Example: check error flag
    if (token?.error === "RefreshAccessTokenError") {
      console.log('token', token)
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Example: check roles
    if (req.nextUrl.pathname.startsWith("/admin")) {
      console.log('token', token)
      if (token?.role !== "ROLE_ADMIN") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
/*if ((token as any)?.error === "RefreshAccessTokenError") {
      console.log("=============== 99 ======================");
      //return NextResponse.redirect(new URL("/login", req.url));
      return NextResponse.redirect(new URL("/dashboard/auth/login", req.url));
    }*/
  /*if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }*/
  /*  return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => { 
 // Only protected paths require a valid token
        const pathName = req.nextUrl.pathname;
        if (!isProtectedPath(pathName)) return true;
        if (!token) return false;
        if ((token as any).error === 'RefreshAccessTokenError') return false;
        return true;


      } //token != null
    },
    pages: {
      signIn: '/login'
    }
  }
);








/*export default async function middleware(req: NextRequest) {
/*const publicPathnameRegex = RegExp(
  `^(/(${routing.locales.join('|')}))?(${publicPages
    .flatMap((p) => (p === '/' ? ['', '/'] : p.replace(':path*', '.*')))
    .join('|')})/?$`,
  'i'
);*/
//  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

/*const res = intlMiddleware(req);
  if (res) return res;
  return (authMiddleware as any)(req) ?? NextResponse.next();
  
  //const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
/*if ((token as any)?.error === "RefreshAccessTokenError") {
      console.log("=============== 99 ======================");
      //return NextResponse.redirect(new URL("/login", req.url));
      return NextResponse.redirect(new URL("/dashboard/auth/login", req.url));
    }*/
  /*if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }*/
//}

/*export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
*/




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
